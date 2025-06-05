#!/usr/bin/env python3
"""
Comprehensive codebase analysis script to identify:
- All defined functions, classes, and modules
- Usage patterns and references
- Unused or redundant elements
- Potential optimization opportunities
"""

import os
import re
import json
from pathlib import Path
from collections import defaultdict, Counter
from typing import Dict, List, Set, Tuple, Any

class CodebaseAnalyzer:
    def __init__(self, root_path: str = "src"):
        self.root_path = Path(root_path)
        self.functions = defaultdict(list)  # function_name -> [file_paths]
        self.classes = defaultdict(list)    # class_name -> [file_paths]
        self.components = defaultdict(list) # component_name -> [file_paths]
        self.imports = defaultdict(list)    # import_name -> [file_paths]
        self.exports = defaultdict(list)    # export_name -> [file_paths]
        self.usage_patterns = defaultdict(set)  # item_name -> {file_paths_where_used}
        self.file_contents = {}
        
        # Patterns for different code elements
        self.patterns = {
            'function_declaration': [
                r'function\s+(\w+)\s*\(',
                r'const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{',
                r'const\s+(\w+)\s*=\s*async\s*\([^)]*\)\s*=>\s*{',
                r'export\s+function\s+(\w+)\s*\(',
                r'export\s+const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{',
            ],
            'class_declaration': [
                r'class\s+(\w+)(?:\s+extends\s+\w+)?\s*{',
                r'export\s+class\s+(\w+)(?:\s+extends\s+\w+)?\s*{',
            ],
            'component_declaration': [
                r'const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*{',
                r'function\s+(\w+)\s*\([^)]*\)\s*{[^}]*return\s*\(',
                r'export\s+default\s+(\w+)',
                r'React\.forwardRef<[^>]*>\(\([^)]*\)\s*=>\s*\(',
            ],
            'import_statement': [
                r'import\s+{([^}]+)}\s+from\s+[\'"][^\'"]+[\'"]',
                r'import\s+(\w+)\s+from\s+[\'"][^\'"]+[\'"]',
                r'import\s+\*\s+as\s+(\w+)\s+from\s+[\'"][^\'"]+[\'"]',
            ],
            'export_statement': [
                r'export\s+{([^}]+)}',
                r'export\s+default\s+(\w+)',
                r'export\s+const\s+(\w+)',
                r'export\s+function\s+(\w+)',
                r'export\s+class\s+(\w+)',
            ],
        }

    def scan_files(self):
        """Scan all TypeScript/JavaScript files in the project"""
        file_extensions = {'.ts', '.tsx', '.js', '.jsx'}
        
        for file_path in self.root_path.rglob('*'):
            if file_path.suffix in file_extensions and not any(
                part.startswith('.') or part == 'node_modules' 
                for part in file_path.parts
            ):
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        self.file_contents[str(file_path)] = content
                        self.analyze_file(file_path, content)
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")

    def analyze_file(self, file_path: Path, content: str):
        """Analyze a single file for functions, classes, components, imports, exports"""
        file_str = str(file_path)
        
        # Remove comments and strings to avoid false positives
        cleaned_content = self.remove_comments_and_strings(content)
        
        # Find functions
        for pattern in self.patterns['function_declaration']:
            matches = re.finditer(pattern, cleaned_content, re.MULTILINE)
            for match in matches:
                func_name = match.group(1)
                self.functions[func_name].append(file_str)
        
        # Find classes
        for pattern in self.patterns['class_declaration']:
            matches = re.finditer(pattern, cleaned_content, re.MULTILINE)
            for match in matches:
                class_name = match.group(1)
                self.classes[class_name].append(file_str)
        
        # Find React components (special case of functions)
        component_patterns = [
            r'const\s+([A-Z]\w+)\s*=\s*\([^)]*\)\s*=>\s*{',
            r'function\s+([A-Z]\w+)\s*\([^)]*\)\s*{',
            r'export\s+default\s+([A-Z]\w+)',
        ]
        for pattern in component_patterns:
            matches = re.finditer(pattern, cleaned_content, re.MULTILINE)
            for match in matches:
                component_name = match.group(1)
                if component_name[0].isupper():  # React components start with uppercase
                    self.components[component_name].append(file_str)
        
        # Find imports
        import_matches = re.finditer(r'import\s+{([^}]+)}\s+from', content)
        for match in import_matches:
            imports = [imp.strip() for imp in match.group(1).split(',')]
            for imp in imports:
                clean_imp = imp.strip().split(' as ')[0]
                self.imports[clean_imp].append(file_str)
        
        # Find default imports
        default_import_matches = re.finditer(r'import\s+(\w+)\s+from', content)
        for match in default_import_matches:
            self.imports[match.group(1)].append(file_str)
        
        # Find exports
        export_matches = re.finditer(r'export\s+{([^}]+)}', content)
        for match in export_matches:
            exports = [exp.strip() for exp in match.group(1).split(',')]
            for exp in exports:
                clean_exp = exp.strip().split(' as ')[0]
                self.exports[clean_exp].append(file_str)

    def remove_comments_and_strings(self, content: str) -> str:
        """Remove comments and string literals to avoid false positives"""
        # Remove single-line comments
        content = re.sub(r'//.*$', '', content, flags=re.MULTILINE)
        # Remove multi-line comments
        content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
        # Remove string literals (basic approach)
        content = re.sub(r'"[^"]*"', '""', content)
        content = re.sub(r"'[^']*'", "''", content)
        content = re.sub(r'`[^`]*`', '``', content)
        return content

    def find_usage_patterns(self):
        """Find where each function, class, and component is used"""
        all_items = set()
        all_items.update(self.functions.keys())
        all_items.update(self.classes.keys())
        all_items.update(self.components.keys())
        all_items.update(self.exports.keys())
        
        for item in all_items:
            for file_path, content in self.file_contents.items():
                # Look for usage patterns (simple word boundary matching)
                if re.search(rf'\b{re.escape(item)}\b', content):
                    self.usage_patterns[item].add(file_path)

    def identify_unused_elements(self) -> Dict[str, List[str]]:
        """Identify potentially unused functions, classes, and components"""
        unused = {
            'functions': [],
            'classes': [],
            'components': [],
            'exports': []
        }
        
        # Check functions
        for func_name, defined_in in self.functions.items():
            used_in = self.usage_patterns.get(func_name, set())
            # Remove the files where it's defined from usage count
            actual_usage = used_in - set(defined_in)
            if not actual_usage:
                unused['functions'].append({
                    'name': func_name,
                    'defined_in': defined_in,
                    'used_in': list(used_in)
                })
        
        # Check classes
        for class_name, defined_in in self.classes.items():
            used_in = self.usage_patterns.get(class_name, set())
            actual_usage = used_in - set(defined_in)
            if not actual_usage:
                unused['classes'].append({
                    'name': class_name,
                    'defined_in': defined_in,
                    'used_in': list(used_in)
                })
        
        # Check components
        for component_name, defined_in in self.components.items():
            used_in = self.usage_patterns.get(component_name, set())
            actual_usage = used_in - set(defined_in)
            if not actual_usage:
                unused['components'].append({
                    'name': component_name,
                    'defined_in': defined_in,
                    'used_in': list(used_in)
                })
        
        # Check exports
        for export_name, defined_in in self.exports.items():
            used_in = self.usage_patterns.get(export_name, set())
            actual_usage = used_in - set(defined_in)
            if not actual_usage:
                unused['exports'].append({
                    'name': export_name,
                    'defined_in': defined_in,
                    'used_in': list(used_in)
                })
        
        return unused

    def generate_report(self) -> Dict[str, Any]:
        """Generate comprehensive analysis report"""
        unused = self.identify_unused_elements()
        
        # Calculate statistics
        total_functions = len(self.functions)
        total_classes = len(self.classes)
        total_components = len(self.components)
        total_exports = len(self.exports)
        
        unused_functions = len(unused['functions'])
        unused_classes = len(unused['classes'])
        unused_components = len(unused['components'])
        unused_exports = len(unused['exports'])
        
        # Find most used items
        usage_counts = {}
        for item, usage_files in self.usage_patterns.items():
            usage_counts[item] = len(usage_files)
        
        most_used = sorted(usage_counts.items(), key=lambda x: x[1], reverse=True)[:10]
        
        # Find files with most definitions
        file_definition_counts = defaultdict(int)
        for definitions in [self.functions, self.classes, self.components]:
            for item, files in definitions.items():
                for file in files:
                    file_definition_counts[file] += 1
        
        busiest_files = sorted(file_definition_counts.items(), key=lambda x: x[1], reverse=True)[:10]
        
        return {
            'summary': {
                'total_files_analyzed': len(self.file_contents),
                'total_functions': total_functions,
                'total_classes': total_classes,
                'total_components': total_components,
                'total_exports': total_exports,
                'unused_functions': unused_functions,
                'unused_classes': unused_classes,
                'unused_components': unused_components,
                'unused_exports': unused_exports,
                'unused_percentage': {
                    'functions': (unused_functions / total_functions * 100) if total_functions > 0 else 0,
                    'classes': (unused_classes / total_classes * 100) if total_classes > 0 else 0,
                    'components': (unused_components / total_components * 100) if total_components > 0 else 0,
                    'exports': (unused_exports / total_exports * 100) if total_exports > 0 else 0,
                }
            },
            'unused_elements': unused,
            'most_used_items': most_used,
            'busiest_files': busiest_files,
            'all_functions': dict(self.functions),
            'all_classes': dict(self.classes),
            'all_components': dict(self.components),
            'all_exports': dict(self.exports),
        }

def main():
    analyzer = CodebaseAnalyzer()
    print("Scanning files...")
    analyzer.scan_files()
    print("Analyzing usage patterns...")
    analyzer.find_usage_patterns()
    print("Generating report...")
    report = analyzer.generate_report()
    
    # Save detailed report to JSON
    with open('codebase_analysis_report.json', 'w') as f:
        json.dump(report, f, indent=2)
    
    print("Analysis complete! Report saved to codebase_analysis_report.json")
    return report

if __name__ == "__main__":
    report = main()