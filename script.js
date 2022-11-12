//--------------------Var Define---------------------//
//Element Variables
let circ = document.querySelectorAll(".circ")
const css = document.querySelector(":root")
const menu = document.querySelector("i")

//Page Colors
let nColor = document.querySelector("#nPage")
let papyroColor = document.querySelector("#pPage")
let modernColor = document.querySelector("#mPage")

//Pen Colors
let bluePen = document.querySelector("#bPen")
let redPen = document.querySelector("#rPen")
let blackPen = document.querySelector("#blPen")
let whitePen = document.querySelector("#wPen")

//Top Colors
let topBlue = document.querySelector("#tbPen")
let topRed = document.querySelector("#trPen")
let topBlack = document.querySelector("#tblPen")
let topWhite = document.querySelector("#twPen")
let topDefault = document.querySelector("#tdPen")

//JS Colors
let circleBack = "#95b2bb"
let circleText = "white"
//---------------------------------------------------//


//Notebook Color Function
    nColor.addEventListener("click", () => {
        css.style.setProperty('--textColor', '#8eafba')
        css.style.setProperty('--page', 'rgb(220, 217, 208)')

        circleBack = "#95b2bb"
        circleText = "white"

        document.querySelector(".page").style.borderRadius = "0"
    })

    papyroColor.addEventListener("click", () => {
        css.style.setProperty('--textColor', '#928d6e')
        css.style.setProperty('--page', 'rgb(182, 168, 125)')

        circleBack = "#7a765c"
        circleText = "#353535"

        document.querySelector(".page").style.borderRadius = "0"
    })

    modernColor.addEventListener("click", () => {
        css.style.setProperty('--textColor', '#496f66')
        css.style.setProperty('--page', 'rgb(44, 44, 51)')

        circleBack = "#3d5b54"
        circleText = "white"

        document.querySelector(".page").style.borderRadius = "50px"
    })


//Pen Color Function
    bluePen.addEventListener("click", () => {
    css.style.setProperty('--selectedColor', 'rgb(27, 27, 196)')
    css.style.setProperty('--back', 'rgb(34, 33, 53)')
    })

    redPen.addEventListener("click", () => {
    css.style.setProperty('--selectedColor', 'rgb(172, 30, 30)')
    css.style.setProperty('--back', 'rgb(70, 32, 32)')
    })

    blackPen.addEventListener("click", () => {
    css.style.setProperty('--selectedColor', 'rgb(38, 38, 38)')
    css.style.setProperty('--back', 'rgb(34, 34, 34)')
    })

    whitePen.addEventListener("click", () => {
        css.style.setProperty('--selectedColor', 'rgb(200, 200, 200)')
        css.style.setProperty('--back', 'radial-gradient(rgb(150, 150, 150), rgb(34, 34, 34))')//rgb(150, 150, 150)
        })


//Top Color Function
    topBlue.addEventListener("click", () => {
    css.style.setProperty('--tSelectedColor', 'rgb(27, 27, 196)')
    })

    topRed.addEventListener("click", () => {
    css.style.setProperty('--tSelectedColor', 'rgb(172, 30, 30)')
    })

    topBlack.addEventListener("click", () => {
    css.style.setProperty('--tSelectedColor', 'rgb(38, 38, 38)')
    })

    topWhite.addEventListener("click", () => {
        css.style.setProperty('--tSelectedColor', 'rgb(200, 200, 200)')
    })

    topDefault.addEventListener("click", () => {
    css.style.setProperty('--tSelectedColor', '#8eafba')
    })


//Dynamic Circle Coloring
    function setColor(circle, index) {
        if (!circle.classList.contains("checked")) {
            circle.style.backgroundColor = circleBack
            circle.classList.add("checked")
            circle.style.color = circleText
        } else {
            circle.style.backgroundColor = "transparent"
            circle.classList.remove("checked")
            circle.style.color = "var(--textColor)"
        }
    }

    circ.forEach((circle, index) => {
        circle.addEventListener("click", () => {
            //Set Colors
            setColor(circle)

            //Set Equivalent
            if (index < 7) {
            index += 7;
            setColor(circ[index])
            } else {
            index -= 7;
            setColor(circ[index])
            }
        })
    })



//Menu Button Click
    menu.addEventListener("click", () => {
        if (menu.classList.contains("fa-bars")) {
            menu.classList.remove("fa-bars")
            menu.classList.add("fa-xmark")
            menu.style.color = "red"

            document.querySelector("iframe").style.right = 0
            document.querySelector(".credit").style.right = 0
            document.querySelector("#styleForm").style.left = 0
        } else {
            menu.classList.remove("fa-xmark")
            menu.classList.add("fa-bars")
            menu.style.color = "white"

            document.querySelector("iframe").style.right = "-500px"
            document.querySelector(".credit").style.right = "-500px"
            document.querySelector("#styleForm").style.left = "-500px"
        }
    })



//Textbox Inputs
    let textAreas = document.querySelectorAll(".textInput")

    textAreas.forEach((tArea) =>  {
        tArea.addEventListener("keyup", (e) => {
            if (e.key === "Enter") {

                e.preventDefault();

                if (tArea.classList.contains("penColor")) {
                    css.style.setProperty('--selectedColor', tArea.value)
                    tArea.value = ''
                } else if (tArea.classList.contains("topColor")) {
                    css.style.setProperty('--tSelectedColor', tArea.value)
                    tArea.value = ''
                } else if (tArea.classList.contains("pageColor")) {
                    css.style.setProperty('--page', tArea.value)
                    tArea.value = ''
                } else if (tArea.classList.contains("backColor")) {
                    css.style.setProperty('--back', tArea.value)
                    tArea.value = ''
                } else if (tArea.classList.contains("tintColor")) {
                    css.style.setProperty('--textColor', tArea.value)
                    tArea.value = ''
                }
            }
        })
    })
