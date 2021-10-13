
def id_matrx(dim: int):
    result = []
    i = 0
    if dim > 0:
        while i < dim:
            result.append([0 if y != i else 1 for y in range(dim)])
            i += 1
    else:
        while i > dim:
            result.append([0 if y != i else 1 for y in range(dim +1, 0 +1, 1)])
            i -= 1
    return result
