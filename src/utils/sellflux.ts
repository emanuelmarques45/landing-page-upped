interface FormProps {
  name: string | null
  email: string | null
  phone: string | null
}

const sendData = async (values: FormProps) => {
  await fetch(
    'https://webhook.sellflux.app/webhook/sellfront/lead/e05c7ba4e087beea9410929698dc41a6?redirect_url=https%3A%2F%2Fchat.whatsapp.com%2FCI8ed1lVaadA7vhc3iXG6y',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        phone: values.phone,
        custom_fields: {
          redirect_url: 'https://chat.whatsapp.com/CI8ed1lVaadA7vhc3iXG6y'
        },
        redirect_url: 'https://chat.whatsapp.com/CI8ed1lVaadA7vhc3iXG6y',
        origin: 'sellfront',
        code: 'e05c7ba4e087beea9410929698dc41a6'
      })
    }
  ).then(res => {
    if (res.status === 500) {
      throw new Error('Internet error')
    }
  })
}

export { sendData }
