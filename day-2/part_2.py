def is_safe(levels):
    increasing = False
    decreasing = False
    safe = True

    for i in range(1, len(levels)):
        level = levels[i]
        previous_level = levels[i - 1]

        if level > previous_level:
            increasing = True
        if level < previous_level:
            decreasing = True
        if abs(level - previous_level) > 3 or abs(level - previous_level) < 1:
            safe = False

    return safe and not (increasing and decreasing)


def solution():
    puzzle_input = open("input.txt", "r", encoding="utf-8").read()
    rows = puzzle_input.splitlines()

    safe_levels = 0
    for row in rows:
        levels = list(map(int, row.split(" ")))

        if is_safe(levels):
            safe_levels += 1
            continue

        for i in range(len(levels)):
            modified_levels = levels[:i] + levels[i + 1:]
            if is_safe(modified_levels):
                safe_levels += 1
                break

    return safe_levels


print(solution())
