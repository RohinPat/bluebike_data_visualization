from app import load_and_process_data, generate_visualizations
import json

def generate_static_data():
    # Load and process data
    df = load_and_process_data()
    
    # Generate visualizations
    data = generate_visualizations(df)
    
    # Create JavaScript file content
    js_content = f"const visualizationData = {json.dumps(data, indent=2)};"
    
    # Write to data.js
    with open('static/data.js', 'w') as f:
        f.write(js_content)

if __name__ == '__main__':
    generate_static_data() 