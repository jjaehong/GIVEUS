import PointsFilter from '@components/points/PointsFilter'
import PointsInfo from '@components/points/PointsInfo'
import PointsList from '@components/points/PointsList'
import MypagePrevHeader from '@components/mypage/MypagePrevHeader'
import * as p from '@pages/mypage/points/PointsPage.styled'
import { useState } from 'react'
import PointsFilterModal from '@components/points/PointsFilter/PointsFilterModal'
import { rechargePointData, usagePointData } from '@components/points/data'

const PointsPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <p.Container>
        <MypagePrevHeader title="포인트 관리" />
        <PointsInfo />
        <PointsFilter setOpen={setOpen} />
        <PointsList
          usageData={usagePointData}
          rechargeData={rechargePointData}
        />
      </p.Container>
      {open && <PointsFilterModal value={open} setValue={setOpen} />}
    </>
  )
}

export default PointsPage