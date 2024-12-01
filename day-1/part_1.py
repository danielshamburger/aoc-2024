def solution():
    puzzle_input = open("input.txt", "r").read()
    lines = puzzle_input.splitlines()

    left = []
    right = []

    for i in range(len(lines)):
        values = lines[i].split(" ")

        left.append(int(values[0]))
        right.append(int(values[-1]))

    left.sort()
    right.sort()

    difference = 0

    for i in range(len(left)):
        difference += abs(left[i] - right[i])

    return difference


print(solution())