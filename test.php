<?php

function descendingOrder(int $n): int {
  // Replace with your code
    $arrayFromInt = array_map('intval', str_split($n)); // integer to array
    rsort($arrayFromInt); // descendant order of array
    $strFromArray = implode($arrayFromInt); // array to string
    return intval($strFromArray); // string to integer
}