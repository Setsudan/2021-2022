void main() {
  DataTypes();
}

void DataTypes() {
  String text = "Let's play dice";
  int age = 16;
  double kdr = 0.99;
  bool isAnIdiot = true;
  var List = [text, age, kdr, isAnIdiot];
  print(List);

  var dataType = [
    "String : 'strings'",
    "Integer:",
    69,
    "Boolean:",
    true,
    "Arrays :",
    ["Item1", "Item2", "Item3", "Etc"]
  ];
  for (var item in dataType) {
    print(item);
  }
}
