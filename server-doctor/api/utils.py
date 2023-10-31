""" SMS Settings """
from eskiz_sms import EskizSMS


def send_sms(username, code_s):
    """Send SMS Function"""
    email = "Ibroxim.2001@mail.ru"
    password = "MQVib4PtVRhLOpjYcfRZRbEesmuxDWInZaEtSlaX"
    eskiz = EskizSMS(email=email, password=password)
    eskiz.send_sms(
                    username,
                    f"Sms kod {code_s}",
                    from_whom="4546",
                    callback_url=None
                    )