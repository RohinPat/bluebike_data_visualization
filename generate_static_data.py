from app import load_and_process_data, generate_visualizations
import json
import os

def generate_static_data():
    # Create static directory if it doesn't exist
    os.makedirs('static', exist_ok=True)
    
    # Load and process data
    df = load_and_process_data()
    
    # Generate visualizations
    visualizations = generate_visualizations(df)
    
    # Write to static/data.js
    with open('static/data.js', 'w') as f:
        f.write('const visualizationData = ')
        json.dump(visualizations, f, indent=2)
        f.write(';')

if __name__ == '__main__':
    generate_static_data() 