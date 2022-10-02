export function formatFormComplements(complements: []) {
  let formated: any = []
  let auxComplement: any = []

  if (complements?.length > 0) {
    auxComplement = [...complements]
  }

  complements?.forEach((element, index) => {
    if (element == null) {
      auxComplement.splice(index, 1)
    }
  })

  if (auxComplement?.length > 0) {
    auxComplement.forEach((element: any) => {
      if (element != undefined) {
        formated.push(JSON.parse(element))
      }
    })
  }

  return formated
}