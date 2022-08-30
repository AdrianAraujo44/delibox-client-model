import { useEffect, useState } from 'react'
import { IoAlertCircleSharp } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useTheme } from 'styled-components'
import useRequestGet from '../../hooks/useRequestGet'
import productDefault from './../../assets/productDefault.png'
import { getOrderStatus } from './utils/functions'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useSocket } from '../../contexts/socket/useSocket'

import {
  Container,
  Progress,
  ProgressItem,
  Item,
  Box,
  Row
} from './styles'

function Order() {
  const { code } = useParams()
  const getOrder = useRequestGet()
  const [order, setOrder] = useState<any>()
  const [orderStatus, setOrderStatus] = useState<any>([])
  const { colors } = useTheme()
  const socket = useSocket()

  useEffect(() => {
    getOrder.requestGet(`order/${code}`)
    socket.emit('join_order_room',code )
  }, [code])

  useEffect(() => {
    socket.on('track_order', (data) => {
      setOrder(data)
      setOrderStatus([...data.status])
    })
  },[socket])

  useEffect(() => {
    if (getOrder.loaded && !getOrder.error) {
      setOrder(getOrder.data)
      setOrderStatus([...getOrder.data.status])
    } else if (getOrder.loaded && getOrder.error) {
      toast.error(getOrder.error)
    }
  }, [getOrder.data, getOrder.loaded, getOrder.error])

  return (
    <Container>
      <h1>Informações sobre o pedido</h1>
      <Progress>
        <ProgressItem
          passed={getOrderStatus(orderStatus, 'IN_QUEUE')}>
          <div className="box">
            <div className="ball"></div>
            <span>na fila</span>
          </div>
          <h3>
            {format(new Date(orderStatus[0] != undefined && orderStatus[0]?.date), "d MMM, 'às' H:m", { locale: ptBR })}
          </h3>
        </ProgressItem>
        <ProgressItem
          passed={getOrderStatus(orderStatus, 'PREPARING')}>
          <div className="box">
            <div className="ball"></div>
            <span>preparando</span>
          </div>
          <h3>
            {orderStatus[1] != undefined &&
              format(new Date(orderStatus[0] != undefined && orderStatus[1]?.date), "d MMM, 'às' H:m", { locale: ptBR })
            }
          </h3>
        </ProgressItem>
        <ProgressItem
          passed={getOrderStatus(orderStatus, 'READY_FOR_DELIVERY')}>
          <div className="box">
            <div className="ball"></div>
            <span>pronto para a entrega</span>
          </div>
          <h3>
            {orderStatus[2] != undefined &&
              format(new Date(orderStatus[0] != undefined && orderStatus[2]?.date), "d MMM, 'às' H:m", { locale: ptBR })
            }
          </h3>
        </ProgressItem>
        <ProgressItem
          passed={getOrderStatus(orderStatus, 'FINISHED')}>
          <div className="box">
            <div className="ball"></div>
            <span>finalizado</span>
          </div>
          <h3>
            {orderStatus[3] != undefined &&
              format(new Date(orderStatus[0] != undefined && orderStatus[3]?.date), "d MMM, 'às' H:m", { locale: ptBR })
            }
          </h3>
        </ProgressItem>
      </Progress>

      {order?.products.map((element: any, index: number) => (
        <Item key={index}>
          <Box>
            <img src={element.item.imageUrl != "" ? element.item.imageUrl : productDefault} />
            <span>{element.item.name}</span>
          </Box>
          <Box>
            <div className="box">
              <span>{element.amount}x</span>
              <span>R$ {element.item.price}</span>
            </div>
          </Box>
        </Item>
      ))}

      <h2>Observações do pedido <IoAlertCircleSharp size={25} color={colors.palette.rose[500]} /></h2>
      <p>{order?.notes == "" ? "nenhuma observação" : order?.notes}</p>

      <Row>
        <span>Nome: </span>
        <span>{order?.client?.name}</span>
      </Row>
      <Row>
        <span>Telefone: </span>
        <span>{order?.client?.phone}</span>
      </Row>
      <Row>
        <span>CEP: </span>
        <span>{order?.client?.address?.cep}</span>
      </Row>
      <Row>
        <span>Rua: </span>
        <span>{order?.client?.address?.street}</span>
      </Row>
      <Row>
        <span>Bairro: </span>
        <span>{order?.client?.address?.neighborhood}</span>
      </Row>
      <Row>
        <span>Número: </span>
        <span>{order?.client?.address?.number}</span>
      </Row>
      <Row>
        <span>Complemento: </span>
        <span>{order?.client?.address?.complement}</span>
      </Row>
    </Container>
  )
}

export default Order