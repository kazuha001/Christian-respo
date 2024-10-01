
function calcu() {

    var dailyId = document.getElementById("daily").value

    var hoursId = document.getElementById("hours")

    var weeksId = document.getElementById("weeks")

    var salaryId = document.getElementById("salary")

    result1 = parseFloat(dailyId / 8)

    hoursId.value = result1

    result2 = parseFloat(dailyId * 6)

    weeksId.value = result2

    result3 = parseFloat(dailyId * 26)

    salaryId.value = result3

}



document.getElementById("submit").addEventListener("submit", function(event) {

    event.preventDefault()
    const formData = new FormData(this)
    
    fetch("submit.php", {
        
        method: 'POST',
        body: formData
    
    })

    alert("Submited Sucessfully")

    window.location.reload()

})

