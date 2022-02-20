function W(el) {
    document.write(el +"<br>")
}

function 0(i){
    return typeof i == 'object' ? i: document.getElementById(i)
}

function S(i)
{
  return O(i).style
}

// allows us to change styles quickly, like:   O('myobj').style.color = 'green'

function C(i)
{
  return document.getElementsByClassName(i)
}
