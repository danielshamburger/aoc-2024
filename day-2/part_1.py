def solution():
    puzzle_input = open("input.txt", "r", encoding="utf-8").read()
    rows = puzzle_input.splitlines()

    safe_levels = 0
    for _, row in enumerate(rows):
        levels = row.split(" ")

        increasing = False
        decreasing = False
        safe = True

        for i, char in enumerate(levels):
            level = int(char)
            if i > 0:
                previous_level = int(levels[i-1])
                if level > previous_level:
                    increasing = True
                if level < previous_level:
                    decreasing = True
                if abs(level - previous_level) > 3 or abs(level - previous_level) < 1:
                    safe = False

        if safe and not (increasing and decreasing):
            safe_levels += 1

    return safe_levels


print(solution())