void main() {
  calc(x, z, type) {
    if (type == "add") {
      var result = x + z;
      return result;
    } else if (type == "substrack") {
      var result = x - z;
      return result;
    } else if (type == "multiply") {
      var result = x * z;
      return result;
    } else if (type == "divide") {
      var result = x / z;
      return result;
    }
  }

  print(calc(5, 3, "multiply"));
}
