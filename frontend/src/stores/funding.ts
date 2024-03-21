import { atom } from 'recoil'
import { data } from '@/components/funding/FundingListCard/data'
import { DonerType, FundingType, MedicalExpenseType } from '@/types/fundingType'

export const fundingState = atom<FundingType[]>({
  key: 'fundingState',
  default: data,
})

export const fundingDetailState = atom<FundingType>({
  key: 'fundingDetailState',
  default: {
    fundingNo: 0,
    issueNumber: '',
    registrationNumber: '',
    patientName: '',
    status: '',
    birth: '',
    gender: '',
    diseaseName: '',
    diseaseCode: '',
    dignosisDate: '',
    opinion: '',
    title: '',
    startDate: '',
    endDate: '',
    totalAmount: 0,
    targetAmount: 0,
    createdAt: '',
    phone: '',
  },
})

export const donerListState = atom<DonerType[]>({
  key: 'donerListState',
  default: [
    {
      memberFundingNo: 1,
      createdAt: '2024-03-23',
      amount: 300000,
      isPublic: 0,
      nickname: '승재홍',
    },
    {
      memberFundingNo: 2,
      createdAt: '2024-03-23',
      amount: 100000,
      isPublic: 0,
      nickname: '김내림',
    },
  ],
})

export const medicalExpenseState = atom<MedicalExpenseType[]>({
  key: 'medicalExpenseState',
  default: [
    {
      usageHistoryNo: 1,
      category: '검사료',
      content: '임상병리검사종합검증료',
      amount: 20000,
      count: 1,
    },
    {
      usageHistoryNo: 2,
      category: '포괄수가료',
      content: '포괄수가 진료비',
      amount: 100000,
      count: 1,
    },
  ],
})