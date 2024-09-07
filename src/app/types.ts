export type MarketData = {
    data: CurrencyData[],
    paging: Paging
}

export type CurrencyData = {
    baseCurrency: string,
    currency: string,
    description: string,
    exchange: string,
    id: string,
    kind: string
    mappings: Cryptoquote,
    symbol: string,
    tickSize: number
}

export type Cryptoquote = {
    exchange: string,
    symbol: string
}

export type Paging = {
    items: number,
    page: number,
    pages: number
}

