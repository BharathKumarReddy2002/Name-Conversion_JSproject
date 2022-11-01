document.addEventListener("input", convertText);

function convertText(){
    let val = document.getElementById("text").value;
    let btn = document.getElementById("convert-btn");

    btn.addEventListener("click", () => {
        //camelCase
        let val1 = camelize(val);
        document.getElementById("camel-case").innerText = val1;
        //pascalCase
        let val2 = PascalCase(val);
        document.getElementById("pascal-case").innerText = val2;
        //snakeCase
        let val3 = snakeCase(val);
        document.getElementById("snake-case").innerText = val3;
        //screamingSnakeCase
        let val4 = toSnakeCase(val);
        document.getElementById("screaming-snake-case").innerText = val4;
        //kababCase
        let val5 = kebabCase(val);
        document.getElementById("kebab-case").innerText = val5;
        //screamingKababCase
        let val6 = toKebabCase(val);
        document.getElementById("screaming-kebab-case").innerHTML = val6;
        });
};



 

function camelize(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  }

  function PascalCase(str) {
    return (str.match(/[a-zA-Z0-9]+/g) || [])
      .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
      .join("");
  }
  function snakeCase(str) {
    const strArr = str.split(" ");
    const snakeArr = strArr.reduce((acc, val) => {
      return acc.concat(val.toLowerCase());
    }, []);
    return snakeArr.join("_");
  }
  function toSnakeCase(str) {
    return str
      .split(" ")
      .map((character) => {
        if (character == character.toLowerCase()) {
          return "" + character.toUpperCase();
        } else {
          return character;
        }
      })
      .join("_");
  }
  function kebabCase(str) {
    return str
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();
  }
  function toKebabCase(str) {
    return str
      .split(" ")
      .map((character) => {
        if (character == character.toLowerCase()) {
          return "" + character.toUpperCase();
        } else {
          return character;
        }
      })
      .join("-");
  }

  


