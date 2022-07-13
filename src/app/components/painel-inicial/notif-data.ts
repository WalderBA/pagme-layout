export const notifBarData = [
  {
    routeLink: '../transferencias',
    icon: 'arrow_forward_ios',
    label: 'Transferir'
  },
  {
    routeLink: 'comprovantes',
    icon: 'content_copy',
    label: 'Comprovantes'
  },
  {
    routeLink: 'ajustes',
    icon: 'price_check',
    label: 'Ajustar Limites'
  },
  {
    routeLink: 'depositos',
    icon: 'local_atm',
    label: 'Depositar'
  },
  {
    routeLink: 'pagamentos',
    icon: 'payment',
    label: 'Pagar'
  },
  {
    routeLink: 'extratos',
    icon: 'request_quote',
    label: 'Extrato'
  },
  {
    routeLink: 'brcode',
    icon: 'qr_code',
    label: 'BR Code'
  },
  {
    routeLink: 'autorizacoes',
    icon: 'check_circle_outline',
    label: 'Autorização de Lançamentos'
  },
  {
    routeLink: 'ted',
    icon: 'account_circle',
    label: 'Remetentes TED'
  },
  {
    routeLink: 'cobrancas',
    icon: 'payments',
    label: 'Cobrança'
  },
  {
    routeLink: 'adquirentes',
    icon: 'library_books',
    label: 'Adquirentes'
  },
  {
    routeLink: 'importacao',
    icon: 'file_copy',
    label: 'Importação de Arquivo'
  },
  {
    routeLink: 'emprestimos',
    icon: 'request_quote',
    label: 'Empréstimos'
  },
  {
    routeLink: 'pix',
    icon: 'pix',
    label: 'PIX'
  },
  {
    routeLink: 'meus-dados',
    icon: 'manage_accounts',
    label: 'Meus Dados'
  },
  {
    routeLink: 'cartao-beneficio',
    icon: 'credit_score',
    label: 'Cartão de Benefícios'
  },
  {
    routeLink: 'lancamentos',
    icon: 'import_export',
    label: 'Lançamentos Pendentes'
  },
]

export const imgBanner = [
  {
    title: 'Aquela indicação que Vale Ouro é na Pagme!',
    text: 'Indique a Pagme para seus amigos e familiares e obtenha diversas vantagens.',
    img: 'assets/images/img1.png'
  },
  {
    title: 'Pix Saque e Pix Troco',
    text: 'Utilize essa nova modalidade liberada para sua melhor experiência com a Pagme.',
    img: 'assets/images/img2.png'
  },
  {
    title: 'Suas economias rendendo diariamente.',
    text: 'Agora você tem disponível uma forma segura de aplicar seu dinheiro com maior rentabilidade.',
    img: 'assets/images/img3.png'
  },
]

// Table Últimas Transações
export interface Transacoes {
  data : string,
  tipo:string,
  transacao:string,
  valor:string,
  saldo:string,
  comprovante:string
}

export const tableTrans: Transacoes[] = [
  {
    data: '20/06/2022',
    tipo: 'C',
    transacao: 'CRÉDITO FOLHA - Débito Simples',
    valor: 'R$ 300,00',
    saldo: 'R$ 2.336,76',
    comprovante: ''
  },
  {
    data: '20/06/2022',
    tipo: 'C',
    transacao: 'CRÉDITO FOLHA - Débito Simples',
    valor: 'R$ 1.000,00',
    saldo: 'R$ 3.336,76',
    comprovante: ''
  },
  {
    data: '21/06/2022',
    tipo: 'D',
    transacao: '25101 Débito - Outros Movimentos',
    valor: 'R$ 3,27',
    saldo: 'R$ 3.333,49',
    comprovante: ''
  },
  {
    data: '22/06/2022',
    tipo: 'D',
    transacao: '25200 Débito - Outros Movimentos',
    valor: 'R$ 50,00',
    saldo: 'R$ 3.283,49',
    comprovante: ''
  },
  {
    data: '22/06/2022',
    tipo: 'D',
    transacao: '25201 Débito - Outros Movimentos',
    valor: 'R$ 2,00',
    saldo: 'R$ 3.281,49',
    comprovante: ''
  }
]

export const lancPendentes = [
  {
    data: '27/06/2022',
    tipo: 'C',
    transacao: 'CRÉDITO FOLHA - Débito Simples',
    valor: 'R$ 250,00'
  }
]

export const lancFuturos = [
  {
    data: '30/06/2022',
    tipo: 'D',
    transacao: 'Agendamento - Boleto Energisa',
    valor: 'R$ 567,48'
  }
]

export const notifAlertPg = [
  {
    titulo: 'Parcela de Empréstimo',
    codigo: '1232422',
    status: 'Atrasado',
    icon: 'edit_calendar'
  },
  {
    titulo: 'Parcela de Empréstimo',
    codigo: '1231456',
    status: 'Aberto',
    icon: 'edit_calendar'
  },
]

export const notifPropRec = [
  {
    titulo: 'Proposta de crédito realizada',
    codigo: '12345678900',
    data: '22/06/2022',
    icon: 'edit_calendar'
  },
  {
    titulo: 'Proposta de crédito realizada',
    codigo: '3025612300',
    data: '24/06/2022',
    icon: 'edit_calendar'
  },
  {
    titulo: 'Simulação realizada',
    codigo: '667896544',
    data: '27/06/2022',
    icon: 'edit_calendar'
  },
]

export const contCadRec = [
  {
    nome: 'Carlos Luiz Batista',
    tipo: 'Avalista',
    data: '23/06/2022',
    icon: 'person_pin'
  },
]
