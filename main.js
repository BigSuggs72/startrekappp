document.querySelector('#getButton').addEventListener('click', apiStarTrek)

async function apiStarTrek(){
    const alienName = document.querySelector('input').value
    try{
        const response = await fetch(`https://startrekapii.herokuapp.com/api/${alienName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('alienName').innerText = data.speciesName
        document.getElementById('alienWorld').innerText = data.homeworld
        document.getElementById('alienFeatures').innerText = data.features
        document.getElementById('alienfacts').innerText = data.interestingFact
        document.getElementById('alienExamples').innerText = data.notableExamples

        document.getElementById('alienimage').src = data.image
        // document.getElementById('alienCaption').innerText = data.notableExamples
    } catch(error) {
        console.log(error)
    }
}