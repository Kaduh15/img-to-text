const imageInput = document.querySelector('#image')
const resultText = document.querySelector('#text')
const imagesList = document.querySelector('#images-list')
const buttonTranscription = document.querySelector('#transcription')
const buttonCleanImages = document.querySelector('#clean-images')
const buttonCopyText = document.querySelector('#copy-text')
const totalImages = document.querySelector('#total-images')
const context = document.querySelector('#context')

let images = []

imageInput.addEventListener('change', handleImageUpload)
buttonTranscription.addEventListener('click', transcribeImages)
buttonCleanImages.addEventListener('click', cleanUp)
buttonCopyText.addEventListener('click', copyTextToClipboard)

function handleImageUpload(e) {
  const file = e.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = function(event) {
    const imageBase64 = event.target.result
    images.push(imageBase64)
    updateImageList()
    toggleButtons(false)
    buttonCleanImages.hidden = false
  }
  reader.readAsDataURL(file)
}

async function transcribeImages() {
  toggleButtons(true)
  imageInput.disabled = true

  try {
    const response = await fetch('/api/transcription', {
      method: 'POST',
      body: JSON.stringify({
        images,
        context: context.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    })

    const result = await response.json()
    displayTranscription(result.data)
    buttonCopyText.hidden = false // Mostra o botão "Copiar Texto"
  } catch (error) {
    console.error(error)
    resultText.innerHTML = 'Erro ao transcrever a imagem'
  } finally {
    toggleButtons(false)
    imageInput.disabled = false
  }
}

function displayTranscription(data) {
  resultText.innerHTML = data.map(text => text.replace(/\n/g, '<br>')).join('<br><br>')
  resultText.hidden = false
}

function updateImageList() {
  imagesList.innerHTML = ''
  images.forEach(imgBase64 => {
    const imgElement = new Image()
    imgElement.src = imgBase64
    imgElement.classList.add('image')
    imagesList.appendChild(imgElement)
  })
  totalImages.innerText = images.length
}

function cleanUp() {
  images = []
  resultText.innerHTML = ''
  resultText.hidden = true
  imageInput.value = ''
  toggleButtons(true)
  buttonCleanImages.hidden = true
  buttonCopyText.hidden = true
  updateImageList()
}

function toggleButtons(state) {
  buttonTranscription.disabled = state
  buttonCleanImages.disabled = state
  buttonCopyText.disabled = state
}

function copyTextToClipboard() {
  const textToCopy = resultText.innerText
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert('Texto copiado para o clipboard!')
  }).catch(err => {
    console.error('Erro ao copiar o texto: ', err)
  })
}

window.addEventListener('DOMContentLoaded', cleanUp)
