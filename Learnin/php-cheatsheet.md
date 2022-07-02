# PHP

Pour écrire en php il faut une balise d'ouverture et de fermeture (des fois optionnel) ces balises s'écrivent ainsi:

- L'ouverture `<?php`
- La fermture ` ?>`

Le console.log/print de php est `echo`
Les variables sont déclarées avec un `$`

```php
echo "This is how to render text on the html" . '</br>';
$variable = "This is how to create a variable";  Must start by letter or _ , then it can contain numbers
echo `${variable}, and echoing a variable plus text is like this` . '</br>';
```

## Data types

- `$name = "Text";` ➡️Text
- `$age = 18;` ➡️Number
- `$height = 1.69;`➡️ Float
- `$isStupid = true;` Boolean ➡️ converted 1 if true and nothing if false
- `$car = ["BMW", "Fiat", "Audi"];`➡️ Array
- `$is = null;` null ➡️ converted into nothing

### Print les variables avec du texte

```php
echo "Nom: " . $name . '</br>';
echo "Age: " . $age . '</br>';
echo "Taille: " . $height . '</br>';
echo "Est débile: " . $isStupid . '</br>';
echo "Voitures: " . $car . '</br>';
echo "est: " . $is . '</br>';
```

### Print les data-type

```php
echo gettype($name) . '</br>';
echo gettype($age) . '</br>';
echo gettype($height) . '</br>';
echo gettype($isStupid) . '</br>';
echo gettype($car) . '</br>';
echo gettype($is) . '</br>';
```

#### Print tout d'un coup

```php
php var_dump($name, $age, $height, $isStupid, $car, $is) . '</br>';
```

### checker le data-type d'une variable

```php
is_string($name);  ➡️ false
is_int($age); ➡️ true
is_double($height);  ➡️ true
is_bool($isStupid); ➡️ true
```

### checker si la var est délcarée

```php
isset($name);  ➡️ true
isset($address); ➡️ false
```

## Constante

```php
define('PI', 3.14);
echo PI . '</br>';
```

## Utiliser les constante préfaites

```php
echo SORT_ASC . '</br>';
echo PHP_INT_MAX . '</br>';
```

# Les mathes dans php

```php
$a = 5;
$b = 4;
```

## L'aritmetics

```php
echo '5 + 4 = ' . $a + $b . '</br>';
echo '5 - 4 = ' . $a - $b . '</br>';
echo '5 _ 4 = ' . $a _ $b . '</br>';
echo '5 / 4 = ' . $a / $b . '</br>';
echo '5 % 4 = ' . $a % $b . '</br>';
```

## Math operator

```php
$a += $b;  a = a + b
$a -= $b;  a = a - b
$a _= $b; a = a _ b
$a /= $b;  a = a / b
$a %= $b; a = a % b
```

### Increment

```php
$a++;  = a + 1
```

### Decrement

```php
$a--; = a - 1
```

## Convertir les data-type

```php
$strNum = "18";
$num = (int)$strNum;  converti en int
$floatNum = (float)$strNum; converti en float

// Make num readable

$unreadbleNum = 5416545646514.16546;
echo number_format($unreadbleNum, 2, ',', ' ') . "</br>"; Render 5 416 545 646 514,17
```

## Strings

### Concaténation

```php
echo "Hello " . " World"; Multiple concatenation . " and PHP";
```

### String functions

```php
$string = " Hello World ";

strlen($string) . '<br>' . PHP_EOL;//  Length of string printed
trim($string) . '<br>' . PHP_EOL;// IDK
ltrim($string) . '<br>' . PHP_EOL;//  IDK
rtrim($string) . '<br>' . PHP_EOL;// IDK
str_word_count($string) . '<br>' . PHP_EOL;//  Number of words
strrev($string) . '<br>' . PHP_EOL;// Reverse letter order
strtoupper($string) . '<br>' . PHP_EOL;//  Uppurcase
strtolower($string) . '<br>' . PHP_EOL;// lowercase
ucfirst('hello') . '<br>' . PHP_EOL;// Uppurcase first letter
elcfirst('HELLO') . '<br>' . PHP_EOL;// Uppurcase everything but first letter
eucwords('hello world') . '<br>' . PHP_EOL;// Uppurcase first letter of words
estrpos($string, 'world') . '<br>' . PHP_EOL;//  Change into world ?
estripos($string, 'world') . '<br>' . PHP_EOL;// IDK
esubstr($string, x) . '<br>' . PHP_EOL;// remove x numbers of characters
estr_replace('World', 'PHP', $string) . '<br>' . PHP_EOL;// Replace 'World ' by "PHP"
estr_ireplace('world', 'PHP', $string) . '<br>' . PHP_EOL;// Same
```

## Multiline text and line breaks

```php
$longText = "
Hello, my name is Zura
I am 27,
I love my daughter
";
echo $longText . '<br>' . PHP_EOL;
echo nl2br($longText) . '<br>' . PHP_EOL;
```

### Multiline text and reserve html tags

```php
$longText = "
Hello, my name is <b>Zura</b>
I am <b>27</b>,
I love my daughter
";
$longText . '<br>';
nl2br($longText) . '<br>';
htmlentities($longText) . '<br>' . PHP_EOL;
nl2br(htmlentities($longText)) . '<br>' . PHP_EOL;
html_entity_decode(htmlentities($longText)) . '<br>' . PHP_EOL;
htmlspecialchars($longText) . '<br>' . PHP_EOL;
```

## Arrays

(Les arrays sont des liste d'ailleurs)

```php
$fruits = ["Banana", "Apple", "Orange"];
echo "<pre>";  Make array fucking readable
var_dump($fruits);
echo "</pre>";

echo $fruits[0]; Banana
echo $fruits[1]; Apple
echo $fruits[2]; Orange
echo $fruits[3]; Error
```

### Ajouter un element

```php
$fruits[] = "DragonFruit";
```

### Longueur de la liste

```php
echo count($fruits) . "</br>";
```

### Add element at end of array

```php
array_push($fruits, "Cherry");
```

### Remove the last one

```php
array_pop($fruits);
```

### Add element at beginning

```php
array_unshift($fruits, "barf");
```

### Remove first one

```php
array_shift($fruits);
```

### Split string into array

```php

$str = "Banana,Apple,Peach";
echo "<pre>"; Make array fucking readable
var_dump(explode(",", $str));
echo "</pre>";
```

## Array to string

```php
echo implode(" & ", $fruits);
```

    Check if element is in array

in_array("Banana", $fruits); ➡️ True
in_array("Barf", $fruits); ➡️ False

    Get element index

array_search('Apple', $fruits); ➡️ 1

    Merge Array

$vegies = ["Potato", "Cumcuber"];

echo "<pre>"; Make array fucking readable
var_dump(array_merge($vegies, $fruits));
echo "</pre>";

    Alternative option

echo "<pre>"; Make array fucking readable
var_dump([...$fruits, ...$vegies]);
echo "</pre>";

    Dictionnaries

$person = [
    'name' => 'Brad',
    'surname' => 'Traversy',
    'age' => 38,
    'hobbies' => ['Gaming', "Videos", "Saxophone"]
];
echo "<pre>";  Make array fucking readable
print_r($person);
echo "</pre>";

    Get element by key

echo $person['name'] . '<br>'; ➡️ Brad

    Set element by key

$person['channel'] = $person['name'] . ' ' . $person["surname"];
echo "<pre>";  Make array fucking readable
print_r($person);
echo "</pre>";

if (!isset($person['adress'])) {  if adress is not set
    $person['adress'] = 'unknown';  Then attribule value string 'unkown'
}
$person['adress'] = $person['adress'] ?? 'unknown'; If address set then keep value else set it to unkown;

    Get the keys of the dictionnarie

echo "<pre>"; Make array fucking readable
print_r(array_keys($person));
echo "</pre>";

    Conditionals

    if condition true then

if ($age < 21) {
    echo "You can't drink";
} elseif ($age >= 21) { Else if this condition true then
echo "you can drink";
}
== VS ===
== check value
=== check value and data-type

    Put 2 conditions

if ($age > 21 && $salary != null) {  +21 AND salary not null
    echo 'Drink and payup';
} elseif ($age < 21 || $salary == null) { -21 OR salary null # code...
echo "Can't drink";
}

    Ternary operator

echo $age < 22 ? 'Young' : 'Old'; if age < 22 return Young else return Old

    Switch

$userRole = 'admin';
switch ($userRole) {
case 'admin': # code...
echo "You got access";
break;

    default:
        # code...
        echo "You don't have access";
        break;

}

    Loop

    while (true) {
        Do something
    }

foreach ($person as $key => $value) {
echo $key . ' ' . $value . '<br/>';
}
?>
