import os
import re

CONTENT_DIR = "content"   # folder with your markdown files

def convert_frontmatter(text):
    match = re.match(r"^---\n(.*?)\n---", text, re.DOTALL)
    if not match:
        return text

    fm = match.group(1)
    lines = fm.split("\n")
    new_lines = []

    for line in lines:
        line = line.strip()

        # remove lume layout
        if line.startswith("layout:"):
            continue

        # convert layout -> template if you want
        if line.startswith("layout:"):
            template = line.split(":",1)[1].strip()
            new_lines.append(f'template = "{template}.html"')
            continue

        # convert yaml style to toml style
        if ":" in line:
            key, val = line.split(":",1)
            key = key.strip()
            val = val.strip()

            if val.startswith("["):
                new_lines.append(f"{key} = {val}")
            else:
                new_lines.append(f'{key} = "{val}"')

    new_fm = "+++\n" + "\n".join(new_lines) + "\n+++"
    return text.replace(match.group(0), new_fm)


for root, dirs, files in os.walk(CONTENT_DIR):
    for file in files:
        if file.endswith(".md"):
            path = os.path.join(root, file)

            with open(path, "r", encoding="utf-8") as f:
                text = f.read()

            new_text = convert_frontmatter(text)

            with open(path, "w", encoding="utf-8") as f:
                f.write(new_text)

            print("Converted:", path)

print("Done.")