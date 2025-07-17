const firstNameInput = document.querySelector("#firstname")
const lastNameInput = document.querySelector("#lastname")
const emailInput = document.querySelector("#email")
const hireDateInput = document.querySelector("#hire_date")
const employeeForm = document.querySelector(".container form")

const resetBtn = document.querySelector(".form__btns button:nth-child(2)")
const addEmployeeBtn = document.querySelector(".form__btns button:nth-child(3)")

const tbody = document.querySelector("#employeeList")



employeeForm.addEventListener('submit', (event) => {

  event.preventDefault()

  const photoInput = document.querySelector('input[name="photo"]')   
  const fileName = photoInput.files[0].name
  console.log(fileName)

  const tr = document.createElement('tr')

  const tdImage = document.createElement('td')
  tdImage.innerHTML = `<img src="../images/${fileName}"/>`
  tr.appendChild(tdImage)
  
  const tdFirstName = document.createElement('td')
  tdFirstName.textContent = firstNameInput.value
  tr.appendChild(tdFirstName)

  const tdLastName = document.createElement('td')
  tdLastName.textContent = lastNameInput.value
  tr.appendChild(tdLastName)

  const tdEmail = document.createElement('td')
  tdEmail.textContent = emailInput.value
  tr.appendChild(tdEmail)

  const tdHireDate = document.createElement('td')
  tdHireDate.textContent = hireDateInput.value
  tr.appendChild(tdHireDate)

  const deleteBtn = document.createElement('td')
  deleteBtn.innerHTML = `<button>Delete</button> `
  tr.appendChild(deleteBtn)

  tbody.appendChild(tr)


  deleteBtn.addEventListener('click', () => {
    
    const result = confirm("Are you sure you want to delete this employee?")

    if(result){
      tr.remove()
    }
    
  })

})


