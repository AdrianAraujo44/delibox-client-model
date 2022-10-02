import { useRef } from 'react'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { useEffect, useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate, useParams } from 'react-router-dom'
import Counter from '../../components/Counter'
import Loading from '../../components/Loading'
import { useCart } from '../../hooks/useCart'
import useRequestGet from '../../hooks/useRequestGet'
import productDefault from './../../assets/productDefault.png'
import RadioForm from '../../components/Forms/RadioForm'
import ComplementItem from '../../components/ComplementItem'
import { formatFormComplements } from './utils/functions'
import { toast } from 'react-toastify'

import {
  Container,
  Content,
  Button,
  ComplementList
} from './styles'

export interface IComplementItem {
  _id: string
  name: string
  price: number
  amount?: number
}

export interface IComplement {
  _id: string
  title: string
  rules: {
    maxItens: number
    maxChoiceItem: number
    mandatory: boolean
  }
  itens: IComplementItem[]
}

function ProductDetail() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState<any>({})
  const productGet = useRequestGet()
  const [amount, setAmount] = useState(1)
  const { cart, setCart } = useCart()
  const formRef = useRef<FormHandles>(null)
  const [complementsSelected, setComplementsSelected] = useState<any>([])
  const [mandatoryComplements, setMandatoryComplements] = useState<string[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [priceComplements, setPriceComplements] = useState({unique:0, mult:0})

  useEffect(() => {
    productGet.requestGet(`product/${productId}`)
  }, [])

  useEffect(() => {
    if (productGet.loaded && !productGet.error) {
      let auxData = { ...productGet.data.product }
      setTotalPrice(productGet.data.product.price)
      let auxMandatory: string[] = []
      let itens: { id: string; value: string; label: string; text: string; }[] = []

      auxData.complementId.forEach((element: IComplement, index: number) => {
        if (element.rules.mandatory) {
          auxMandatory.push(element._id)
        }

        if (element.rules.maxItens == 1) {
          element.itens.forEach((item: any) => {
            itens.push({
              label: item.name,
              value: JSON.stringify({ ...item, amount: 1, complementId: element._id }),
              id: item._id,
              text: `+ R$${item.price?.toFixed(2)}`
            })
          })
          auxData.complementId[index].itens = itens
          itens = []
        }
      })

      setData(auxData)
      setMandatoryComplements(auxMandatory)
    } else if (productGet.loaded && productGet.error) {
      toast.error(productGet.error)
    }
  }, [productGet.data, productGet.loaded, productGet.error])

  useEffect(() => {
    let total = 0
    let auxPrices = {...priceComplements}
    complementsSelected.forEach((element:any) => {
      total += element.price * element.amount
    })
    auxPrices.mult = total
    setPriceComplements({...auxPrices})

   /*  calculateTotalPrice() */
  }, [complementsSelected])

  const calculateTotalPrice = () => {
    let total = 0
    let auxPrices = {...priceComplements}
    formatFormComplements(formRef.current?.getData().complements).forEach((element:any) => {
      total += element.price * element.amount
    })
    console.log('total mult '+ total)
    auxPrices.unique = total
    setPriceComplements({...auxPrices})
    console.log(auxPrices)
  }

  useEffect(() => {
    setTotalPrice(data?.price + priceComplements?.mult + priceComplements?.unique)
    console.log(data?.price)
    console.log(priceComplements.mult)
    console.log(priceComplements.unique)
    console.log(priceComplements)
  }, [priceComplements])

  const verifyMandatoryItens = () => {
    let auxComplements = [...formatFormComplements(formRef.current?.getData().complements)]
    let auxMandatory = [...mandatoryComplements]
    mandatoryComplements.forEach((element, index) => {
      auxComplements.forEach((complement) => {
        if(element == complement.complementId) {
          auxMandatory.splice(index,1)
        }
      })
    })

    setMandatoryComplements(auxMandatory)
  }

  const addCart = () => {
    let exits = false
    let position = 0

    for (let i = 0; i < cart.length; i++) {
      /* if (JSON.stringify(cart[i]) == JSON.stringify(data)) { */
      if (cart[i]._id == data?._id) {
        exits = true
        position = i
        break
      } else {
        exits = false
      }
    }

    if (exits) {
      let aux = cart
      aux[position].amount += amount
      setCart([...aux])
    } else {
      setCart([...cart, {
        _id: data?._id,
        name: data?.name,
        price: data?.price,
        imageUrl: data?.imageUrl,
        amount,
        complements: [...complementsSelected, ...formatFormComplements(formRef.current?.getData().complements)]
      }])
    }

    navigate('/')
  }

  return (
    <>
      {!productGet.loading ? (
        <Container>
          <header>
            <button type="button">
              <IoArrowBack size={20} onClick={() => navigate('/')} />
            </button>
            <span>voltar</span>
          </header>
          <Content>
            <img
              src={data.imageUrl != "" ? data.imageUrl : productDefault}
              alt="image do produto" />
            <strong>{data?.name}</strong>
            <p>{data?.description}</p>
          </Content>
          <Form ref={formRef} onSubmit={(data) => console.log(data.complements)} onChange={(e) => { verifyMandatoryItens(); calculateTotalPrice() }}>
            <ComplementList>
              {
                data?.complementId?.map((element: any, index: number) => (
                  <div key={index}>
                    {
                      element.rules.maxItens == 1 ? (
                        <div>
                          <div className='title'>
                            <h2>{element.title}</h2>
                            {element.rules.mandatory && <div className='badge'>Obrigatório</div>}
                          </div>
                          <span>escolha uma opção</span>
                          <RadioForm
                            name={`complements[${index}]`}
                            options={element.itens}
                          />
                        </div>
                      ) : (
                        <div>
                          <div className='title'>
                            <h2>{element.title}</h2>
                            {element.rules.mandatory && <div className='badge'>Obrigatório</div>}
                          </div>
                          
                          <span>
                            {element.rules.mandatory ? `escolha de 1 até ${element.rules.maxItens}` : `escolha até ${element.rules.maxItens}`}
                          </span>
                          {
                            element.itens.map((complement: any, index:number) => (
                              <ComplementItem
                                key={index}
                                item={{ ...complement, rules: element.rules }}
                                complementsSelected={complementsSelected}
                                setComplementsSelected={setComplementsSelected}
                                complementId={element._id}
                                mandatoryComplements={mandatoryComplements}
                                setMandatoryComplements={setMandatoryComplements}
                              />
                            ))
                          }

                        </div>
                      )
                    }
                  </div>
                ))
              }
            </ComplementList>

          </Form>
          <footer>
            {data?.available == true ? (
              <Counter setAmount={setAmount} />
            ) : (
              <span className='missing'>produto indisponível</span>
            )}
            {
              data?.available == true && (
                <Button onClick={() => addCart()} disabled={(mandatoryComplements.length == 0) ? false : true}>
                  adicionar
                  <strong>R$ {totalPrice.toFixed(2)}</strong>
                </Button>
              )
            }
          </footer>
        </Container>
      ) : (
        <Loading />
      )}
    </>

  )
}

export default ProductDetail