let myForm = document.getElementById("MyForm")

let synth = new Tone.Synth().toDestination()

function onSubmit (e) {
    e.preventDefault()

    synth.triggerAttack(myForm.elements["yourName"].value)

    alert(myForm.elements["yourName"].value)

    let Duration = parseFloat(myForm.elements["Duration"].value)

    synth.triggerRelease(Tone.now() + Duration)
}

myForm.addEventListener("submit", onSubmit)