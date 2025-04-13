from app import load_and_process_data, generate_visualizations
import json
import os
import sys

def generate_static_data():
    try:
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
        
        print("Successfully generated static data")
        return True
    except Exception as e:
        print(f"Error generating static data: {str(e)}", file=sys.stderr)
        return False

if __name__ == '__main__':
    success = generate_static_data()
    sys.exit(0 if success else 1) 