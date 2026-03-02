#!/usr/bin/env python3
"""
Generate service detail pages from base template
Usage: python3 generate-services.py
"""

# Service configurations for all providers
SERVICES = {
    'longvan-system': [
        'sua-chua-may-tinh',
        'nang-cap-phan-cung',
        've-sinh-may-tinh',
        'cai-dat-phan-mem',
        'diet-virus-malware',
        'sao-luu-du-lieu',
        'bao-tri-he-thong-mang',
        'cai-dat-wifi',
        'lap-dat-mang-lan',
        'ho-tro-tu-xa',
        'dao-tao-it-co-ban',
        'tu-van-giai-phap-it'
    ],
    'bubbly-baby-spa': [
        'boi-thuy-lieu',
        'massage-toan-than',
        'cham-soc-da',
        'goi-combo'
    ],
    'xuong-ve-sang-tao': [
        've-tranh-son-dau',
        've-mau-nuoc',
        've-chi-than',
        'workshop-1-ngay'
    ]
}

def generate_service_pages():
    # Read base template
    with open('_service-base.html', 'r', encoding='utf-8') as f:
        base_template = f.read()
    
    total_generated = 0
    
    # Generate service pages for each provider
    for provider_id, service_ids in SERVICES.items():
        for service_id in service_ids:
            filename = f'service-{provider_id}-{service_id}.html'
            
            # Replace placeholders
            content = base_template.replace(
                "window.SERVICE_ID = 'SERVICE_ID_PLACEHOLDER';",
                f"window.SERVICE_ID = '{service_id}';"
            ).replace(
                "window.PROVIDER_ID = 'PROVIDER_ID_PLACEHOLDER';",
                f"window.PROVIDER_ID = '{provider_id}';"
            )
            
            # Write to file
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(content)
            
            total_generated += 1
            print(f'✓ Generated {filename}')
    
    print(f'\n✓ Successfully generated {total_generated} service pages!')
    print('  To update all pages, edit _service-base.html and run this script again.')

if __name__ == '__main__':
    generate_service_pages()
