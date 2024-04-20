import json

data = {}
with open("data.txt", "r") as file:
    for line in file.read().splitlines():
        if line.count(":") > 0:
            fields = line.split(":",2)
            data[fields[1]] = json.loads('{' + line.split(":{", 1)[1])

light = {}
with open("light_pollution.txt", "r") as file:
    for line in file.read().splitlines():
        if line.count(":") > 0:
            fields = line.split(":",2)
            light[fields[0]] = fields[1]

output = {}
for x in data:
    if len(data[x].keys()) == 7:
        if x in light:
            data[x]['Light Pollution'] = light[x]
            output[x] = data[x]

print(len(output))

keys = list(output.keys())

middle = len(keys) // 2
front = keys[:middle]
back = keys[middle:]

first_half = {key: data[key] for key in front}
second_half = {key: data[key] for key in back}

with open("first_half.json", "w") as file:
    json.dump(first_half, file)
with open("second_half.json", "w") as file:
    json.dump(second_half, file)
