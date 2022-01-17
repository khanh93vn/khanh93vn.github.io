import pandas as pd

df = pd.read_excel("data.xlsx", header=None)

script = """
const V1 = [{}];
const V2 = [{}];
const V3 = [{}];
const MEANING = [{}]""".format(
    *(', '.join([*map(lambda s: f"'{s}'", df[i])]) for i in range(4))
)

with open("generated-vars.txt", "w", encoding="utf-8") as file:
    file.write(script)
