import Head from 'next/head'

var isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

export default class extends React.Component {
  timeoutId;

  static async getInitialProps({ req }) {
    console.log('@@', req.url)
    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { url: req.url };
  }

  async componentDidMount() {
    const { url } = this.props;
    console.log('this.props', url)
    if ( isMobile ) {
      window.location = `reciclabc://auth/reset/${url.token}`;
      // window.location = `exp://127.0.0.1:19000/--/auth/reset/${url.query.token}`;

      this.timeoutId = setTimeout(() => {
        window.location = 'https://reciclabc.com.br'
      }, 200)
    } else {
      window.location = 'https://reciclabc.com.br'
    }
  }

  componentWillUnmount() {
    if (this.timeoutId != null) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    return (
      <div/>
    )
  }
}