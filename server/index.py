import stripe

SECRET_KEY = "sk_test_51NwdoBLsxTwlOAhXwXqBOgzq2DdI2K1LRTchGdONYkKQN9nvqeIrLMT1LJQRIGtD0L9RJR69BWUXEVyTTdxdrpIs000EeIJmI3"

stripe.api_key=SECRET_KEY

def generate_card_token(cardnumber,expmonth,expyear,cvv):
    data= stripe.Token.create(
            card={
                "number": str(cardnumber),
                "exp_month": int(expmonth),
                "exp_year": int(expyear),
                "cvc": str(cvv),
            })
    card_token = data['id']

    return card_token


def create_payment_charge(tokenid,amount):

    payment = stripe.Charge.create(
                amount= int(amount)*100,                  # convert amount to cents
                currency='usd',
                description='Example charge',
                source=tokenid,
                )

    payment_check = payment['paid']    # return True for successfull payment

    return payment_check

get_token = generate_card_token(
    "4242424242424242",
    12,
    2020,
    "123"
)

charge_payment = create_payment_charge(get_token, 1000)

print(get_token)
# print(charge_payment)
