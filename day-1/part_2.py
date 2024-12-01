def solution():
    puzzle_input = open("input.txt", "r", encoding="utf-8").read()
    lines = puzzle_input.splitlines()

    left = []
    right = []

    for _, row in enumerate(lines):
        values = row.split(" ")
        left.append(int(values[0]))
        right.append(int(values[-1]))

    similarity = 0

    for _, item in enumerate(left):
        occurrences = right.count(item)
        similarity += item * occurrences

    return similarity


print(solution())
