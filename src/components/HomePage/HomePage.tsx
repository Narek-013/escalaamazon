import AmazonItem from "../AmazonItem/AmazonItem"
import Contact from "../Contact/Contact"
import EasyExport from "../EasyExport/EasyExport"
import Main from "../Main/Main"
import Slider from "../Slider/Slider"
import StepIndicator from "../StepIndicator/StepIndicator"
import Success from "../Success/Success"
import Support from "../Support/Support"
import Tariff from "../Tariff/Tariff"
import Team from "../Team/Team"

function HomePage() {
  return (
    <>
      <Main />
      <Support />
      <StepIndicator />
      <EasyExport />
      <AmazonItem />
      <Tariff />
      <Success />
      <Team />
      <Contact />
      <Slider />
    </>
  )
}

export default HomePage
