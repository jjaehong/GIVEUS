import RegFile from '@/components/fundingReg/RegFile'
import RegInput from '@/components/fundingReg/RegInput'
import RegNumber from '@/components/fundingReg/RegNumber'
import { adminState } from '@/store/user'
import { RegDataType } from '@/types/fundingType'
import * as f from '@pages/home/fundingReg/FundingRegPage.styled'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'
import { createFirstReg } from '@/apis/funding'
import { useNavigate } from 'react-router-dom'
import { calculateAge } from '@/utils/calcMethods'

const FundingRegPage = () => {
  const navigate = useNavigate()
  const admin = useRecoilValue(adminState)
  const [regData, setRegData] = useState<RegDataType>({
    phone: '',
    targetAmount: 0,
    startDate: '',
    endDate: '',
    issueNumber: '',
    registrationNumber: '',
    patientName: '',
    birth: '',
    gender: '',
    diseaseName: '',
    diseaseCode: '',
    diagnosisDate: '',
    opinion: '',
  })

  const { mutate } = useMutation({
    mutationKey: ['createFirReg'],
    mutationFn: createFirstReg,
    onSuccess(result) {
      console.log('등록 성공', result)
      navigate(`/admin/funding/${result.id}`)
    },
    onError(error) {
      console.error('등록 실패:', error)
      alert('펀딩 등록에 실패하였습니다.내용을 다시 확인해주세요.')
    },
  })

  const handleCreateFirstReg = async () => {
    const age = calculateAge(regData.birth)
    const gender = regData.gender === 'M' ? '남' : '여'

    mutate({
      ...regData,
      adminNo: admin.adminNo,
      title: `${regData.diseaseName} ${age}세(${gender}) 펀딩`,
    })
  }

  return (
    <f.Container>
      <f.Title>펀딩 등록</f.Title>
      <RegInput
        id="phone"
        label="보호자 휴대폰 번호"
        placeholder="휴대폰 번호 11자리 입력 ( 0000000000 )"
        value={regData.phone}
        setValue={setRegData}
      />
      <RegInput
        id="targetAmount"
        label="펀딩 목표 금액"
        placeholder="펀딩 금액 입력"
        value={''}
        setValue={setRegData}
      />
      <RegInput
        id="startDate"
        label="펀딩 시작일"
        placeholder="펀딩 시작일 입력 ( YYYY-MM-DD )"
        value={regData.startDate}
        setValue={setRegData}
      />
      <RegInput
        id="endDate"
        label="펀딩 종료일"
        placeholder="펀딩 종료일 입력 ( YYYY-MM-DD )"
        value={regData.endDate}
        setValue={setRegData}
      />
      {/* 진단서 파일 등록 */}
      <RegFile />
      <RegInput
        id="issueNumber"
        label="발행번호"
        placeholder="발행번호 입력"
        value={regData.issueNumber}
        setValue={setRegData}
      />
      <RegInput
        id="registrationNumber"
        label="환자번호"
        placeholder="환자번호 입력"
        value={regData.registrationNumber}
        setValue={setRegData}
      />
      <RegInput
        id="patientName"
        label="환자 성명"
        placeholder="환자 성명 입력"
        value={regData.patientName}
        setValue={setRegData}
      />

      <RegNumber
        id="regNumber"
        label="환자 주민등록번호"
        placeholder="생년월일 6자리"
        value={''}
        setValue={setRegData}
      />

      <RegInput
        id="diseaseName"
        label="질병명"
        placeholder="질병명 입력"
        value={regData.diseaseName}
        setValue={setRegData}
      />
      <RegInput
        id="diseaseCode"
        label="병명 코드"
        placeholder="병명 코드 입력"
        value={regData.diseaseCode}
        setValue={setRegData}
      />
      <RegInput
        id="diagnosisDate"
        label="진단일"
        placeholder="진단일 입력 ( YYYY-MM-DD )"
        value={regData.diagnosisDate}
        setValue={setRegData}
      />
      <RegInput
        id="opinion"
        label="치료 내용 / 향후 치료에 대한 소견"
        placeholder="치료 내용 입력"
        value={regData.opinion}
        setValue={setRegData}
      />
      <f.Wrap>
        <f.Button onClick={() => handleCreateFirstReg()}>1차 등록</f.Button>
      </f.Wrap>
    </f.Container>
  )
}

export default FundingRegPage
