import { ReactNode, Component, ErrorInfo } from 'react'
import { DefaultErrorPage } from '../../pages/errors/DefaultError'

interface Props {
  children: ReactNode
}

export class ErrorBoundary extends Component<
  Props,
  { error: Error | null; info: unknown }
> {
  constructor(props: Props) {
    super(props)

    this.state = {
      error: null,
      info: null
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, info: errorInfo })
  }

  render() {
    const { error, info } = this.state

    if (error) {
      // send info to error manager instead log it
      console.error(error, info)
      return <DefaultErrorPage />
    }
    return this.props.children
  }
}
