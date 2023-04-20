import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import imagem from '../../assets/back.png';

const imageURI = imagem;
const LocutoresScreen = () => {
    return (
        
            <View style={styles.container}>
                <ImageBackground

                    source={{ uri: imageURI }}

                    style={styles.backgroundImage}

                >
                    <Text style={styles.title}>LOCUTORES:</Text>
                    <View style={styles.locutorCard}>
                        <Image source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMUExYUFBQWFhYYGRsZFxYYGBgWGxkZGxgZGR4ZIRcZHikhHhsmHhkbIzIjJyosLy8vGCA1OjUuOSkuLywBCgoKDg0OGxAQHC4mISYuLjAuLi4uLi4uLi4uMC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLv/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAMEBQcCAQj/xABOEAACAQIDBAcCCQgIBQMFAAABAgMAEQQSIQUGMUEHEyJRYXGBMpEUI0JygqGxs8EkNFJidJLC0SUzNXOio7LhFUNj8PGDk9IWdYTDxP/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwAEBQb/xAAtEQACAgEDAgUDBAMBAAAAAAAAAQIRAxIhMQRBEzJRcYEiYcEFkbHRFKHwQv/aAAwDAQACEQMRAD8A3GlSpVjHlZ30q43WCEfrSN6DIv8Aqf3VodY1vtjetxshHBLRD6Fy3+NmHpSTex19FDVlv0Iu7GF63GYdLXHWBm8owZPtQD1ox6R93synFRjtKPjQOaAaP5rz/V+aKq+jDB5sU8nKOPL4ZpGH1gRn96tStQirRfquocM6ceyPngtXl6JN9t2/gst0HxMhJj/UbiY/LmvgCPk6jJqdVsetinHJFSid5q0Lo63mvbCStr/yWPMDUxk94HDw05a5wTXqSEWIJBBBBBsQQbgg8iDresnRPqcCywo+i717QpuPvJ8KitIQJowBINBmHASAdzW1HI3HC1ykGrJnz08bhJxlyd0q8Fe0RBUq8pVjHteUq8JoMxE2jKyRu6kdlGYXF9QpI1vwr59k3jxLklp5rk3NpHXU8eB0HgLAVvW8J+Il4j4qThw9huNfOCN9tdGIpFBpuQZcTikhlxGJ6so7ELiZ1N1AtqHvzo26NsRIXxiPLJIkU5jj6x2kYBZJV9piSbgL63oM6LT+Xx/3Uv8ADRf0YG8u0f2uT7yStk9ASVBftuUpDIwNrKawfD7SkTaapI5l67Ml7lclwSug0IUjh595rct5z+TS/N/EV8+SH+mIfn/wvQg6QvYJdvvZE+efsahSGLqksLm3n+ANEu8J7CfOP2H+dDc4upHf/OhQ4xJij3cr8/dwqO+JPcOF/WnHg8Rwta313/CmHh8eVufv40GB0eGUkA00G19/2Um0FqbDUAB30La7S8sPKf8AHDWv4mXtOcttQM1757AcuVuHjWQdCf8AaDnuwsv3kFali2N2NrcNf0rDU+XL0NFdzUZ/i5gsjjT22PvYn8aVQ8c7GR7fpHn40qAa+xvFKlSpRCLj8SscbyN7KKzHyUEn7KwbOzdpvabtN85tT9ZNax0kY3q8Gy85WWIeRuzf4FasimksGNr2BIA5nuqcz1f0+FRcjVei7B5cK0nOWV29E+KH+gn1oukkABJIAAuSdAB33qJsXAiCCKEf8tFTzIUAn1OtB/SttBlSGEGwkLu471jygKfDM4P0aa6RxKLz5qXdj+8u9uzpYnhZ2lDD/lIzWI1DLIRkuDYg34isrzf98Pq5V7I9NMai5We50/TrCqi2JmrwNTWavb0q4OksNl7SkglSaI9tORNgynijW+SftAPEVuOxNrR4mFJYz2WGoPFWHFT4g18+3ok3K3kOEm7VzFIQJQNcp4CQDvHA9695Apoujz+s6bxI6lyv9m4ivaYhkBAIIIIuCNQQdQQe6nb1Y8Ro6pVwTSvRNR0TXN68LVzelCkMY2MMjAgkFXBsbCxBGorNcJ0YwsVlhxIKMLqZIknRlexU+2oItbKbcDz41p8wGQnuDfYapdq7GlbDrFh5mwvVqMvVqluyLBCGU9kCwFu7nwq8XsApN3ej5sM6SLiRmVGTMkCoxzfKYszZmGlriwAtarLc3YfwWXFpnaTO6SZmCqSWDX0XTiOPfendytrviIZEnA66GRoZrCwYgBg+XlmVhcDS97aWq0wMmaefS1urXzsGP8VBuTuwDe9Z/JZfIfWwFfPx/tiH5x+7et/3s/NZPo/61r5/X+2IvpfdSUY+UPYvt4z2I/nN9lDrtV/vIezH5t9gocdqLGOHao0hpxjUaVqUAy7U2DXrU0Dr/wB+VYBonQiPy2Y92Ff65Yv5VouKZhnLX1Y2ub9kADTwuCbeNZ30IfnWJPdhx9co/lR9tPFhkfIblMyEHQBwOAPdqD6msuGYAZtmzSMzpfKWNvQkH6waVFmysOOrAVmygsBpa4DsL+vH1pU9gs0+lSpVEBmHSpjs08UIOkaGRh4uSq+oCP8AvUMbt4LrsVBHa4MgZvmx/GH35APpUt6Mf1uKnkvoZGRfmx/Fi3gSpb6VStyNsYfDTST4iTIqxZU7LMSWa7WCg6gIP3qnVuz2kvC6b4/k2hjbXlWKdKG82HkxaKkqyBIspMZ6wB2dsy3XS4CrfzFUfSB0hzY8dTEjQ4cG5u13mHLMBoF55dfOmd0MVs+LBSrjDh2aaVcgy9ZPEgOQyWCtoHAbqyVJXOdbgGuja2eXhyvFPUuRiHFo/ssD4X193EV0JQxyr2m/RW7N+6tzQvvVPA2IZsIoiQAAZGfKzAWZ0DgMqMdQDrW1bhb1ssWGSdfi8QoEGJAVQ0wuHw0gVQBKGVgraZwBzvUZYz0V+put47gJNsrELGZGw8qxj2naNkA1tc5rG1+dqhXr6CnUMCrAMGBDA8CCLEHzFYnvVu++ElYEMYCfipTe2X9Bm5OOGvG1x4I0X6brPEbUtmVYanY2rnB7Pnl/qoJpPFI2K/v2y/XV/s/cXHOe0kcQ75ZBf92PMffahpOqWfHHloNOijajPHJh21EOQoe5JM/Y9GRreDAcqP8ANQ1ufu6uDRhn6yRyC72yg2FgoW5soueJ4saIb1VcHgZnGWRuPB3evC1RINoQuzIksbuvtKrqzLfTVQbj1qRejZOj0mvL1wxrnNSjJDmIktGx8CB5k2A95AprE7UhiTPLIiDLmOZgNPI6nnXGKQmMtnYAKxK2WxsSbklSRw5VRz4CPEFVnihmyEmMnsFCeOU3JIPMacBoa6YRuNkqOOjtjIMTiAAEmmHVkWIZY40jzAjjqpW/eh5Wq52NKrS4gg3+MUe6NR9tx6Gp+EjKqFyKiqAFCm4AAta2UWAqp3ZgkVpusCgh1VQrFxky9YLkqvavI3LuoN3bN6j29x/JZPo/61r5/H9sR/TP+VJ/Kt531ly4Yi1wSovfgcwtpzuawZD/AEuh8JPqikox4MuC43lbsx+bfYtDjtV/vM+kf0/4KHHaiMNyNUWRqdkaosjUoDx2poGuXauAayAaX0KPafE3HtRxqD3HNI9vIhG18hzonw8nxWJfvxGIPoDb8KHegxAZMWxGojht4EtKL+drj1NXeCXNgSeJk65tOed3tb0tWXBix2LGTCpuBcse7i7UqtdzYFbCRsUvcya/+q9KmsWmG1RdoyMsUjKLsqMVHeQpIHvqVXhqRkfOoHZXW+g179BrVJvJi+rCWUNdrkHgVUG4PqVPpWybS6NgzkwziOMm/VtFny35KwdbL3Ag2oG6WNzxg8Kkqu0uaTI7MFAS9iLZRcKcpBuTrloRjuepm6uEsdRe4H7Ph+EWfrIVZy1kZypFjw4am1jbuI767Gw7sUMuV+SgLY+AKm/vol6ItnpPhsXFIAyM6AAgEAmN+0L89BrUzHYIfCCk0cSnKQXuciqewTYL7WUmwIC6amq6tqObHiT+pmb7QwSg2jkEp5gKWt7udWyb4SwYCTZ/VxSRy5nVmzFornUAadoOhYE8CalRbNHWzLD1RVTfNqdGJNhbQ2I7+YoT2/F8eVGpNvef/NTu3QuXHSs+p8HOHjjZSWDIjKeJIKKQT4kGnQxvbUGgLaGKTE7HYxEjqoowyg6qYMmdD3goCR3gg1O6O9oZ8FGpPaiZ4j4ANnX/AAOo9Ki3uN4TUNT7Oh7Hb/4cOY41xGIkBIKwxM2qmx1e2gPMAiucNvqs2GxMsEZWWGMydXLqCB8q6HVRY3FwQQO+9CDYyXB7VlMUfWtIzKkWbJmGIyTCzWNrP9lEW527Uqy4ibEhEOIWRDCrBwqzSZ3uRcaaAAE870LZeWKEVfs1vz6kld65pdlSzdYkU6OUugC3Kuj2RXLdpomtz1p/Yu8LnZE8juXliWZC7HUsReO58nQelCPRxsSLESTx4mPO0SqoJLWjkzNHIbA2L6IRe/sVM2Ruxj2wWKwzxCIytAQXdVDMjHrCCMxsQkdjbWmDKGJWvun8P+iFBHLs98HiFBKvCkhXQXDKplh5cipW/MDjlNbDhcWkiLIjZkdQysOasLg+6hJty0nQPiTfElAnWRM4SMLoqxxsbFQP0gbkk6X0u9gbJXCwrCrySKpYhpCpPaOYgZQAFuSQPE1ieWcZpP8A9dy0d64z01I1NNJofI1kQJ+IP5PJ8x/saq7CRsGHZYeNjb38Kl7QJMTq8WaNoyrZJArZSpB9vKF055qCsNumw7WGxm0IQdcrSxYlU8AqyH8a68c9KaI3uaUDpUDZo7c3z1+6Sh/YC42Fz12M+Ex5dBJhmwxViRY9aFIOgIse8a6a2G6HX9W7TywSu0h7ULZkACItr5RrcHTlcamp1SYDnfv81Pz0/wBVYKIyNqISPkyfcS/yr6K29s7r4WjvYmxB7iDcVjGK2YIJmLWMgLLc6kcVOvvGlPDyhXBVbzP/AFf0v4KHpHq43ml9j6f8FDzyUBhO1RpWr15KYdqABM1Nq3GuWauS1ZGNb6Cxpjj+rhx72n/lRfi4gqZI7RhUYqALBciM9rfRPvoQ6Bz2cd5Yf/8Aoon26x6p7cbEefIj1Fx60YgL7c/EImDgXh2L/vEt+NKqTB3EacfZX7BXlGhTTKVKlUjHlMYrDJIpR1V1PFWAYH0OlPmg7fTejq8NMYGBdU9sahWZhGLHvBa9/CnxwlN1ETJkjBWyEs2Eicw4aOON43KziOMRoXZbi5UAM9gDYXy5rGx0qo2ihtK1yt7nMuQkgAcS6mw46Ac70N7ExCQskTaxzxI6knjKl1lBPHMxs1+8eVN7zY6fDgHMWw7N2pFC5xdSAj5hbjazi17W0Op7MvSyhC18jdN1kW9EvggYjFBMzE3FjqQgPDnlABXw8BT+7+0IE+EtaPPLBFCgnUhAbfG9ZkBIUG9rElhb0Dds4wyKf1tAON7n7anYzKsmQN21ULItiLEC6sDwIsbfu1zY8KyXZXqOocHUV/2wbbmbKxME7RWSfDTJkmljkR0KlDaQXIbMMxUi2oJ8Ke2HuptCBWRcXFCrEFiimViQMubtoMpsOTUGYGwANrENoeY56HkeNH2ydquIIHkkY3xDxlmJPZ7IAJ52vz76Gbo3jWqxsHXTzSapcX70W8u7cLzQzyPK8sKxgNmADtE2ZZHGW5bN3EDgOVXqSVFUkgnkKZ6+uQduTW5dJPpxp1Zao0xNSocRRFLUPSMmlQevpPP2T5eX12NYIztnEyRaPkW4uCpLaXtfUD7DVFtuLEF2jg2pF1q8Yc0CvqP0Stz4A6Hw41M3w2QhIE2LxKF1NjGWK2BAPZ6tyOI5ioI3Wjf4tZo5NPZlZfLUan/DXZHFGrJ6mE43lXIqCOZ3ycAhdbr2TmdMwXtcQdRzHIi+EZ5ppBLg9nz5R8WB1IlJMiAfLYj4sux7K3Kiw1qr2lsVcL7MrxtpZMPijETyFkzrp42sLa1abp4nETzLHK8kmHYNpIYZVPZbTN1IOa4B0kbnpReOlaNaSqgv2fsaNg14poMrEKqYiVQy2BzWikC2uSLeFXEUYiQ6uwFzdiXa3dc6mhLH7mNGo+Bz4uI31Hwl2UD5kwdTf0tULCQbUzWXaCaC5E8UTgAED2olTXUcSanp1K7EDuUhkJsbFb63U8L8NCD9YrGN8pFTEyKBYDLYeag2+v66OnbbWU2+ATIQRdeuiJHDiWYDz1rO96N3tqSTPKcMouFFkLzWCqFvmCqDexPrWjsgoE95JdU+l/BVA8h46AcB3k/yq22xsjEZgJewwvZQMp1+k3dVXJsu3tFvUmm0sxGeWmWnHfU1NnJ3X+unk2eO76qGhmsc2Vu1icQEMSxtnOl58Oh0vxRpMy8DxHd3ir6Pon2oXC/B1sT/AFnWxlADzJDZrDwW9UH/AAwHkPWn8Hh3iN43eM98btGfepFBxZjadxty32bHOskqStKyHsKVChA4tdjr7dR94sRlQ248v3gPxrOcNvFiUFvhuIt3GV5B7nLU5/8AVDssgmnLqEZgHSNLsouACqqSb8qyRg/lxwXKvGyRjnyjWlQvvfjurxLItrBIfHjBGT9ZpU1g2N/pUq5bhUQA1vRiZDGypoLXuCQdNb6cR3ju5Gs/mxQZijglJ+xJ3BiCCQbWN2A9bHnWhbcbKL2NhrmHI+PcPH/s5ztORULEi8bkFlFrpIOa9wNrjuIt3Cvb6JLRweHOcpSeoFMSjCFFbV4J3ia+lw6Fh6FozbzFP43arvCsYftJIkhuLlkswXkVuCe0Da+XhrXmOk7U5uDmGHlzDTNkkVM3nkYg+INV83xcmbuYq3kTb6jY+hrofoOiDisKFcSAKdRlj4Aydpr2FuwLLf53lXeGwXbaRiSzG5J1+UGtr5CpmJFyo5C5Gg04A68bWP1U86gAVOOOKbaHnlk0k32HdnYUPLBEzZFeQqWIvYZGa9uZ0sPE1f7UgyP1SIwiVrrnYcbAM2Xjm05gULbRnKiN11KSK4t4Xop2ti1ZVxCkLHIMyl5LtbS91ubG/KuDroy2rg9X9L0OL23C3cfHCYPC5u0QDHxVzZLnwysPQd9O7dmSGOWTL2Y1ZyBxOUE2HjWWYPeuTDYrroCrdnq5Fa+V0zXtpYgjiG5eIJFEeO3nXFxyxKFV5EcKhexa4PO2h9DXluDlwd85qLafwPje/DBMzyFOAKsrFrkX0VQSR/I1XHpETP8AFKHQHKUJKTMLXzopGUryykhjblQPtCWQ2Vpc3UsvWpJGLqT2c+XiyDNlOp1sR7QsS7E3RYSrJK8GTT+oMgulmNxmQrckodVIstU0wRyts0fZ+1o5QSjA5TZ1uMyNzRlBOVhwtUqWfsN5H7KzmDd/4Pi0xES4gxAsZUR4hKNLi2oEkZOpSy8NOVTMPvzEXeOVTErXEUhIIIscpcfIJFjxIF7X50ujvHcZMOukyYK8Jb2ckhbl2Q0QP+qsY2jtnEYhrkBWP6R6yxPJVtlHuJ/HUOnTFWXDoPlCUk+GaFbeuY+6gLcfDB52Y69WuYfOclQfQB/eK7IOoISKsl7Dh2jhyZlQEgZiFKqJFUXKSItrMVHZewIIANwdNk3P2tFiMPHNEbrIWPiDY3U+INx6UDYvaSwAEpnzHRQQvCxvcg2tpUPo9xfVbUMcVxBic0ojPySUZr2BsCrLJH4hV7q0t4uxpxS4NhxQcr2GCnvKl/cARQDit3zNMpjxmHypxQKc7aEAMTIdNeSitFrG4NrLh0lxTqzJBmBA+UzsqBc1rDV1J7hrY8Kni7k0GUe5Udy2SMMRq6KEY/SWx+unG3feL2MbPHx9qV5ePcsxcfVWPydI+05XzwCONeSpCG08Xe7H0I8hVtszpHxE0iJK0ayqRlRmywym/slgetgkPAOWaO51UcaeWrv/AAEP8ZicbAmsyzrftddAiG3G+rQqe7S54aUsJsGLGwrJkjhcNIrGKMKHytYEg620vYnS9ebM+A40JIIR1gkZJkmBMscixvdHzEkkWFjfkKKdixKquFFh1sh4k6liTqfE0jaStcgsD26M0Zu1LGy8/iBm/ez/AIVQ9IO5eGweFE0IcyGVEJZyRlN7jILLy42v41r9AXTMfyFP7+P/AEvSKUm0azEJWPfUZmqRMajOaqwDbtUfEt2G+afsNOOaZkFwRzIt79KVmNH243xz9m1rC2UtwUDiT4cOXDlSqJvfA+Jxck0SjI+S2trERqrDhyYEelKmuQ1n0RQzt7elYMXhcIoDSTt2v+nGA3a82YWHk3dRNWIb+bQ6rbHwkXbqeoJXnlTOXUDvKsbeJFTxw1OicnRre0SF1Psnn3X7/Csx30w6rMVVQhYAoPkSg8QDwWQMD2eehGprVOuSWNZEIdHUMpGoZWFwfIg0C737CcqGVmeFQ2aKwYgGxuLi7AW0F7jW1+FdvRzSlTPK6jHom2ZRDMM3VX1YrGt/0XxEbn3dsU7iGDFjyYk+hNMbfwqxypKjZ1JJB4knKbA+I1149/eeI5gRXo07ZmlSaOIXs+U/JXsnvBPPxFh76toWBAuAfMXqimazq3ofC/8AuB76sMPPY02PZsTIuGObYUtGdLWF6pdl7RC21sQDbTUm4sB4m/1VZbUlOW7ei34+n40ObPhLzBFIDdormNhmCkgXHC/uqWeSTv8Ac6OnTrYId4cGgbrIwAr2aw5XFzVNHiSCO8HQ9xOgPgbn6zRVtCImJBbTKND2SDz9eVvCg2csri6kWIPEcje2nlXk5enlDJa49T1l1GPJj+9br7h02BXEosygdcl1u2glW1jG/wCqyta/EV3utjerb4KxJWxbDs3Fkuc0RP6aEMCP1T3Cm905PiLn5TsfTRf4TS25gC3aTsuWDRPwyT6AC5FgsgAHdmVf0zXLNLU0LC9KbJu+e2HgiQREB5WKhuOVVF2IB56getZzLi7LIrDMSgsSeFhlBB7gNLeFHW0If+IYeALZJuuKPmB+LdYZWdSBqASi+8UN7ubA+EyShzZYrdYb3ZtWARbaAEqbn8afG9MQu2aH0tbQE9gBZsO7RP4hxDIrDzF/VaHOj+UCaVTxaMEfQc3+8+qrveiISYvFIbASGO3LtGCEr/qYDxIoF2FjzFMko1yk3HC4IKsuvhf1Arr0/SqNF7mh7wx/1bcu0p8zlI99j7qrINo/BZoMUFuYmdSo4tENXA8R17keIFFWDaOdAVyujDzB8CO/woN6TsbGs0MMIUJHCdEtYM8zhgLc7x6+N6WNcMefFm/4XEJIiyIwZHUMrDUMrC4I8CDXzfvlKTiPg1z1cN+sUE2aQsWa44G0hYDwRe6tP6ENpZtn9W7exPJFGD3ZVlyjyzn0rJdst+XYm/EzNf8A9x/xJpMcWm0SSsKtyNipKzPIoaNCFCkXDPYE3HNVBGnefCtEngheMxzJEYuGWQLkH72g9KFdwz+Sr39ZLf8A91h9gHuqTtls0gU8FUEDxJa5+oD0qjpui0aqhvePCtgJ4MbACyWEMq3zZ0CnJ2idWCrYOx1OW57bUfbq4xJomkRgytJIVYcxm+3vHI1nWHZpYMZhG7S9QcRCP0XiYMQPAkRn1bvom6HsQrbPCggsk0wcc1JlZwD5qwPkalk8pGS3DugDppP5FH+0J/oko/rPemo/kcX7Sn3cpqUPMgGJTGokhqXPUSSrsxHc0sMt5Ix3yIPe6ivHp/Y63xEI/wCop/dOb+GkMGm0NrRdY2eYKwNiM4W1tPZ5cK9oD205OImN/wDmOPcxH4UqOphPsMVgvSFDfaGJ8Sg/ykrehWL9IcIGNktxsjH1zj+H6qPTecnPgMOiLaHXbNjQm7QM0J8Apun+WyUR4mO3lWX9CuOKYvFYb5LIJQO4o+Qn1Eifu1qG8OI6qCWUAExxs+vDsgnXUaaUZrTla9fyc/UYfFhtyYp0lbL6uWQr7D/HRgcARbrF873PgJFoHw0tGO9G2MXOB10USqe0uQMCLixBu7AHvtpoKDTHl0t9Zr0o5FGO5LHgnppkhluOV9CL6i4Nxp507h5SwDczqbcjzHofsqA0jcr0y0pXS5HkSNefCk/yUndD/wCM2qbJO25Gsutr1B2HD8aGJtYE/Vb8aTtzplpbc65s2TxLOjFi0BxHJE6ZDKiNcntOApvx8jfX1qnn2Jhy92xsZH6KBWPvz/Xb0oc+EA6VwZqlqyOKi5cDrHBO0g+w+1sNEiosnZUWHZdveQvG+tTcFt/DSsIc2YydnKUazXHC5HdWXzztpbSrTdlvjonPEYiEX8Gz3+wVzyx82UTC/Gj4Lio5WzmOS6vILnTq3XOwv/WIpJvbtDMeN6m7v7YOIxeNkZYkJVFCxDKpCFkzAXPHQ/SFd7blQxAueypLeqwylf8AFaqncyARYkRvb8qhWRMt+z2WkyEnnx91CO8WN3LPpAkZDipFNmAwrqRyIiwlj7xXm+O68ik4iCMmPTMFU2U2GlxoP/Fd9I6fF4j+6wx/wYf+VbZgFEeEUiw+LDknUajMdLjv766tWlL4Evc+cNhQzySAWmjiv8c8ZkTT9Hs2zueAUAk0Y4zc/qtn43FTLllWNI4YjZjh4h1VgW5ylSMxHAlv0jWprgIZIuuw4jaQXaOSMAAsL3TnZTqpHj3gWod9pVk2TjXU3V0V1PgY4GFBzT4M2Zzu/iHj2WssbZXTaZIP/wCGv1VV7y64ozgWWcdYB3MxLMvozMv0DVlsAX2PJ4bQB9+GUVX4X8pixUIUmfDsZoeFijSrnUi19C7vcHgzX4Uy/LMFW4mOGV4r636xfJgAw9GF/p0RY/BNJZk9oC1ibXHEC/eCT76yvZGOZHDDsup4HkeBBHca0jZu9EBW8hMZA10LL5hlHDztRlFrcstkWOxtn9QJp5bAmPqwLg2ViL3IJGpy+6s/6Pt5fgmOUEnqplWOQcifkN84XYDvzEcxVhvHvqs0U5izCGFGTOdDJiJlaGNQONlVppLHX4sG3C+e4zDPBLaZSHSxdOBXMga1xwYKwOnA0FvaJTavY+ugazzpuP5HB+0r9zPRnu/MXw2HdjdmhjZj3kopJ99BXTgfySD9qX7ieuWK+oUxWaokhqTNUWSrsxHerXcxQcdhx3yEDz6t7fXaqlqtN0BfG4fvzNbxYRuVHqbD1pGYpYlBAJ4nU0qaQGw8h9le0KZj7KklUFQSAWNl8TYtb3KT6VkXSKv5dL4xwn3Zx/8AKtD2xjQGBKn4omRTqLlVkV1F+ZXMAeGtCe3NjnaU8M2Ha0UkPbkZSQhikbsFRb4w9awtf/lnu1pg+iWqXFCS32BPo0JG2FsbAwS5v1h2Db3gH0rXd7yPgOKva3webj/dtQpsHc2LCYlZ3mlMpVolBQCLt2F7qDYmw0LcTzqz6RXvg3jc2EnZYju1t/iy/XTZF4uVaScp+GtzOdtjMnpQHtFLW148fDUj8Pro82i94VPePwoE2j7RrryLYeJC60jhb3VHcXNzT7Cm2Fc7RQ5hWO/bD2/UKg/4gRXOJMV/iw4H67Kx9yoPtNS8Lsx5UldSlogC2aREJvmIChiM7dhtB+Ipj4C2Ut2bAXPbW9vK+p8KWjEMrTbCnmWm2FAJFmq12BxU908B/wATj8aq56sNkGyse54j7n/3qb5YAz2zCswjRiwHWcVIBHxb8z5VGnzZ8OY5ERkwsLozukdiucAgOwzPoBkFyQSNaZ23Ker0uDmGo0PBh+NVm05WDYJ0XMww62W175WkuLeVThwx+4db9TdZC8hGXrMJhpLdxaOM29LfVWyYTDifBQryKREjWxy5SVNuINiKxfeVb4OP/wC24U/5Q/l9VaRsHeaPDwIjgscqlUUxhhdRcHrHUDXXjzNdM4NxTj2one4/0flw2JBVwplGrLl7axqGI0sQQE1HO9Qd5NdjY8cArYhB82OYoo/dQCiPZ+3YOrbK7FkA+KYBJNdFAXTMGIsGFwSDYmqXenDlNkYxWsW6pme3AuyK7keBcsak95XXdBZmO7X9kzjuxqH3wAVz0Wj+lpvmt9n+9d7sL/ROJ/a4j/lLXfROn9MyDwb6lBqvC3+5gz3t6LBMesw7BGOpS5W3zWHLwPvoWg6LsYxtPJIkYIv8Yh4m2irfXXS4t4itq2xtNYI2dtSB2VHFjoLAeZHvqJu9t2PGRsVVlZWySROBmVrA2NiQQQb3BPvBFR8SdW+AgzPumFOGaWxSAhIIfaVMsTWlc/Kl7C2HsoNBf2jj3SUf6QxfdmX7iOvoDaMuixkkmOXLcm5ZTC7KbnU6GxPMqa+fekz8/wAUf1l+4jq2NtxF7n0hur+Z4b+4i+7Wg3py/NMP+1L9xiKMt1fzPDf3EX3a0GdOX5ph/wBqX7jEVyx8wTFJ6iyVKmqHIK6JbmGHpYXEtFIkqEB43WRCRcBkYMNOYuBXjU0amzCYZte/WvK8tSrbGPq/G42CWLOp/rAyqxBQXYiLtZrcWyrY6nS3KqrcuFoMRiICeyVSQL3PmdGPqBGPo1cbX3ahngeEl0DkNmQgMGEiyBhcEXzIp4cqmQbOVJTLdizKEN7WsDe+g4k0FOOlxFrewa3sx9sVDFYkAxO3cLynKSf/AE204kgcgatd7NitiYOpQqAWQtmuLqrBrXAJvoKj7Z2C82MhlvljRfjLaM9mzItxwAY3I56a2uCTWoqenS1yjThGao+bN5xnwmGYjUlbgm3GBjx5aiqLFjRfmr/pFFm+GHAw6AcEmyg94CyqD5W+2hnEJdFP6q/YK9GStsRFaVpsrUkrTe2HyCKwGsa3880gv59mpNUrHHNnYlYy2dXYMALKxThfiQL21ruaaERlVjVnbMM5MylQb2IAYKbaCxU3trxqnWZyf9v51N2RCHkKyZj2ewAbdsuiqL93aoRub0ruF7IisKbK1Y4Xd/EYh2+DoWQNlu0iRgHuJkYC9WWJ6OMckUkr9SBGjSOomR2yoCzWCEgkAHnSTjpbQU9gTxIqVs/SOXwCH/NX+dRurqbg4LxytwQBFLeJlXQX52BPpSOPL+wS129iLIDa/bFx6NzrmGZGWCxBeOEDQm6nO/dzswq13jGzQzJBJicQFPtsYUjJFxoBGWYeOl+R50NbCC9eFJyo7KhYm2RWdQWJ7gNa50nVFYtJps2F9nXwMWKlF4lwOEUX4SSsctj+qCyk99/Os+eFsTMcxZzK5KoSSLu17AHgBf0ArYd/8J1WxRCq5FTqUy3zWCOthm5jsjWs73EiDYxL/JSRh5hQv2Ma7MTbgSitwl2PuX1UfxWIZJEvJGSBkjkA9peYQ8HHBhyvY1bPvCuM2TtC4yTJFIs0XNXWMA271JBsae2riHiCZCVLEi4tcADXj33+2gPePrIsSZlOmIiKzAfL+S2nDh1beZbvo6NWwZquCRsCK2y8WO7EwH3qgpjosNtsuf1T9aqP4qk7uPm2bjvDEYfT9zX/AL7qidHUR/4s7AcsvqVSw8+ya0o6r9/wT7G7bUwfWAEAFluVvzupFr8tbG/eooU3K2fJFPO+VshWNCGUhi4dzc3GpAc3NzxHhV7PvVhI2yPiIRJwKddEHv8AMZwb+Fr1YYPaMclwjarqykFGUG9iUYAgGxsbWNceqSi4tDFJt8WxAPMiK/oMVb7TWBdJX5/ivNfuI6+g9swj+tIsWdVF/wBBEly/W7n6VfPfSNrjsV5r9yldONXjF7n0lut+Z4X+4i+7Wgzpy/NIP2pfuJ6NN1fzPDf3EX3a0F9OR/JMP+1L9xPXJDzDGJTVFkqXLUSSuhsBHemWp56ZakCcUq9vSpbMfZbvbkT5VX7Q2kEieQZwQpI+KkYggHXqtGbyFiatKbdwOJA8zapqvQDMu2nvfjVjLM8Bic5M74TF4e2ZTa7zFYxwsDc6sOVyAebpDkMeZ8bijMACF7EcchNri0SAqOPEg8OPLf8AH4NZAoYAjMTwBHsML2OnPmKHsL0fYKPLkhTQkvdVuwIOl0C21t4WBFta6YZoJcK/YGkzYYAzYKFLkECNyfaNwt7HXx76GNp4XJZRewAGvGtNxOxJYXljSFuqDfFZEdhk5LoLWGgHlQVtLY2IkkKph52f9HqnB9SwAHmTXdri1didwS6uo+1Yy6pbioC+maRv4/qoj2hu3iYVzTIkIJsOungS57gA5JPpVLJEL6yR+a9Y/wBiUkqaHIEWBuAoYs5NlVEY+JueFufhUyDYkoBeRGQJdm+MhDjJqSsbNma1idByNe4cMpJXOxysLIjNcOhQ91tGOtjY20prETOMRInWEB5Jc1wGvmLcV01PAgW4nyqbjQeSx2bvLNhDIIJXTrCJD2IHDFhfN8YjEG2lhzFLaO+2NmRkkxMrowKsmZUUqRYgrGo0tpao8uACZRiIZFU3yFw8Oa4+SzLe3P2WHGp+H3cS1xGHFgdJ2dhfh8XHGrW8bWpJWuw8Y6nyC7yDko9386ZxmOdwFJ7I9lQABfhewGp8Tej2DYkIGsETW4lZetN/FHI93Gr7Z2JwygrlghB4soXDP7mAJ/70tUMmSXoXXTvkod6tm4M2vKEmKgsYkBAuPaZQdRfxzVW7M6PJpu0mIg6s/KHWG48QFsD4E1qeB3ZwOKtO7jFKi5csbWOhJ7QU2Y6+VTpdh4SB1mjb4Nk1frAEDJpdS79m1ha+pAvY0uNL1/cE1fYk7T2Y/wDwaOB3zuqRKXN+0VZddddQKyjdjE9Ri4mbQByj/NdSh9xKn0rZsbJ1mz1dGR7tGwaP2COvU9nQXS3vFZLvZsWWOVpjlMchuAoIyiwFj38CP5114FcH7s5rpmn7S2aZY7D2gcy+eot6gn6qGNqbJkSEPOuS5Yi5UkKFW57JIt/Klutv3EkYjxJYFRYSgFwVHAMBqGA52sa823t2LaWIweHiLGB5HVzbKZEFs2nEKcjjyVjRTcZfYpOmhbubvOuyJCEPWYiWKQcbletQJpyAUAnzNVe9gGzUeBFz4jEo15FbJ1YZcgI01Oh7uA7zW3JGAAAAALAAcABwrBekmQvtSW/yFVV8si/71PFkc5NfP4J0Duwd1OuIQasRfkABwJYkcKPtnbl4qBAq4jrIxwjXNFJEdDnhcsQGuBdDZHtYgcR30fYcZJX5lwl/1VUH7WNEuP2o0RUIAWIv2gSABpwBHH8KeXNIqoqtyFBvO7j4LihbERsDnylVmjKNaUC3ZOouv+4GS7+D8rxR8V+5jo/31ZcRD8IjUR4jDOOstc5o5DZXHMgPpbldu+s12w7Yie3stKVBJ1A7IUm/cACa0K00Sa3Ppjdb8zw39xF92tBnTofyTD/tS/cT0a7tW+CYe3DqYreXVrQR06fmuG/aR9xPXFDzhMTlNRZKlSmoklXMMPTTU61NtSMBxSr2lQ2DsfXuH2PClrRqT+kwzsfN2ufrqWuHQcFUegp6lUbZhUqVKsYVckX0NdUqxgF6Rt1+uhEkMQaSIPaNQLsrhc2UfpgopHgGHEisRGyMaxsuDxN+Fuom+3JX1PStV4Z5RVCuJ8zwbs7WIsuDlseIKlR65nFWUO5O2zcrhwhJvcvh7343uXYk+PGvoalRfVTDpRimB3G2+Bb4TCqnjHJIJEPnH1DKavE6OJnitL8FSVdYzCrrE3erRsOxfXtRZLaaGtPr2k8ad2ajG9pYiXCWzF4DYKY8RkxCtc2HUzA9ZKumovmUEErrap2A2XLiUWX4JlHA5SYb2vr1c6C4PJgdeYrVCBXtbJkjNL6d/UrjzTxvZmeQbrrcF9nOxHBmlgPqDmuPQVa4XZAiPWQ7Lw6yfps8Yf8AfCMfrourw1NNLsCeSU3bZneJ3onXZcU08MrSSKrExoCoUtnUkA2QZQOPC+pqp2djxioRojI17LmDEW42K6HxGtQcHtnEYSSRVlbq0xWIjKN2lyg3UBTwHPS3GlPvVBiFyYiGbDZWLLLhmzKD+kYSOfgGNehilodVsGeF8lZidyAZAc75Lg5ABrrwudLeNz5HhWkbkbvxxSPMwRpmVQMoASJDf4pByHZBJ4sddOFDMqPh1Vm2jgpo21BkYwvl5aqXDeoFTtg71xNKkcMiyZ5EViLqntAaPJlzHU2Chr0+ZxyQelkqaNMrDuk/DW2g78nVfeFUfga3Kso37wXWyYnUBoT1i+KdUrsB3kFWP0q5Ol8z9v6NdEbo7m0lj55lkHkVCH3FPrq+27hjpIBoBY++4+01m27m2DDKkg8iOF1Nrr56A+YrX9n4tJUDoQysP/II/A10yVOyqdqgO2Ng2mnmQDsNg5lbuzFoynrcEjyNZyuynnxMcMWhbTN+iCMpPoDe1btjsdDhowAEQyEgAADNlUu507o1c+njQj0O7H62SbHuOxm6uAHuUdtvecvmpqevSm2JNbmp4PDiONI19lFVRfjZQAPsrPunT80g/aR9zNWk1mvTsfyTD/tK/czVxw8wDEZDUWQ09K1R3NdDANNTZNdOa4NIzHlKlSpQ2fZ9KlSqRhUqVKsYVKlSrGFSpUqxhUqVKsYVKlSrGFSpUqxhUqVKsYxDeX+un/bm+6FUD8fWlSr0V29kd0PIV+3IF6q+UXzcbC/vqn3Mc/DMLqfznD8/+tHXtKhPklPhn1rWf7T/AD6b5v8A+qlSqPSed+xyS4Mr3jFpzbTTlpVlsjEujjI7Lca5WK318KVKuzJ5R4ELHYqR8ViM7s1sHibZmLW+J5X4cT761XoX/sqH5833z0qVcufyAfIc1mvTv+Zw/tK/czUqVc2PzGMMmqNJSpVdmGWrgUqVI+DHVKlSpAn/2Q==' }} style={styles.locutorImage} />
                        <View style={styles.locutorInfo}>
                            <Text style={styles.locutorName}>Zezo Machado</Text>
                            <Text style={styles.locutorDescription}>@Zezomachado</Text>
                        </View>
                    </View>
                    <View style={styles.locutorCard}>
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIwPZZhLq5701HHvrBPormMKCvT4B3rcENG97754V1GjReuYvrgEIUOFkemMqgElMJi50&usqp=CAU' }} style={styles.locutorImage} />
                        <View style={styles.locutorInfo}>
                            <Text style={styles.locutorName}>Maria Tamarez</Text>
                            <Text style={styles.locutorDescription}>@MariMari25</Text>
                        </View>
                    </View>
                    
                    </ImageBackground>
            </View>
        
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        padding: 10,
      
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 13,
        marginTop: 20,
      },
    locutorCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 9.0,
        shadowRadius: 0,
    },
    locutorImage: {
        width: 75,
        height: 75,
        borderRadius: 100,
        marginRight: 20,
        borderWidth: 7,
        borderColor: '#8EF830',
        borderStyle: 'solid',
      },
    locutorInfo: {
        flex: 1,
    },
    locutorName: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 0,
        marginBottom: 10,
    },
    locutorDescription: {
        color: '#fff',
        fontSize: 18,
        marginTop: 0,
        marginBottom: 0,
    },
});

export default LocutoresScreen;
