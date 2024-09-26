import random
import uuid
from pathlib import Path

def generate_new_line(original_line):
    new_id = str(uuid.uuid4())
    new_title = f"PATENT_TITLE_{random.randint(1000, 9999)}"
    return original_line.replace('123456789', new_id).replace('PATENT_TITLE', new_title)

def duplicate_line_in_file(file_path, out_path):
    with open(file_path, 'r') as file:
        lines = file.readlines()

    target_line = "{ id: '123456789', title: 'PATENT_TITLE' }"
    new_lines = []
    for line in lines:
        new_lines.append(line)
        if target_line in line:
            k = random.randint(2, 10)
            for _ in range(k):
                new_lines.append(generate_new_line(line))

    Path(out_path).parent.mkdir(parents=True, exist_ok=True)
    with open(out_path, 'w') as file:
        file.writelines(new_lines)

# Example usage
# duplicate_line_in_file('ex1_populated_list.tsx')

import tqdm 
def make_k_copies(
        file_path: str,
        out_dir: str,
        k: int,
) -> None:
    for i in tqdm.tqdm(range(k), total=k):
        out_path = f"{out_dir}/copy_{i}.tsx"
        duplicate_line_in_file(file_path, out_path)