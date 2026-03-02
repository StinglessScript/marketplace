#!/usr/bin/env python3
"""
Generate provider pages from base template
Usage: python3 generate-providers.py
"""

# Provider configurations
PROVIDERS = {
    'longvan-system.html': 'longvan-system',
    'bubbly-baby-spa.html': 'bubbly-baby-spa',
    'xuong-ve-sang-tao.html': 'xuong-ve-sang-tao',
    'bs-ha-ngoc-manh.html': 'bs-ha-ngoc-manh',
}

def generate_provider_pages():
    # Read base template
    with open('_provider-base.html', 'r', encoding='utf-8') as f:
        base_template = f.read()
    
    # Generate each provider page
    for filename, provider_id in PROVIDERS.items():
        # Replace ONLY the window.PROVIDER_ID line
        content = base_template.replace(
            "window.PROVIDER_ID = 'PROVIDER_ID_PLACEHOLDER';",
            f"window.PROVIDER_ID = '{provider_id}';"
        )
        
        # Write to file
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f'✓ Generated {filename} (provider: {provider_id})')
    
    print(f'\n✓ Successfully generated {len(PROVIDERS)} provider pages!')
    print('  All pages are now synchronized and use the same template.')
    print('  To update all pages, edit _provider-base.html and run this script again.')

if __name__ == '__main__':
    generate_provider_pages()
