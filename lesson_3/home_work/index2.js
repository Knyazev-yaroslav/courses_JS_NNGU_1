// "кот" > "код"              true
// "2" + 2 * "2"              NaN
// undefined == null          true
// undefined != null          false
// null == 0 false            null равно только undifined
// 2 > "3"                    false
// null - false + true        1
// 1 / "l"                    NaN
// "2" * "3"                  6
// 4 + 5 + "O"                90
// "l" + 4 + 5                l45
// "4" - 2                    2
// "4" - "4x"                 NaN
// “23” == 23                 true
// null == false              false
// " -4 "/ 0 + 1              -infinity
// null + 1                   1
// undefined + null           NaN
// 1 === “1”                  false
// “2” > 10                   false
// // NaN == undefined           false   Проблема: с чем бы мы ни сравнивали NaN, результатом сравнения всегда будет false.
// Объяснение: NaN может возникать в результате множества операций: 0/0, parseInt('неприводимая к числу строка'), Math.sqrt(-1) и было бы странно, если корень из -1 равнялся 0/0. Именно поэтому NaN !== NaN.
// Совет: не использовать булевы операторы с NaN. Для проверки нужно использовать функцию isNaN.
