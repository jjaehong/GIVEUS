import * as a from '@/components/funding/Donate/AnonymousSection.styled'
import { DonateAnonymousSectionType } from '@/types/donateType'

const AnonymousSection = (props: DonateAnonymousSectionType) => {
  const { isPublic, setIsPublic } = props
  const name: string = '김내림'
  const nickname: string = '익명의 쿼카'

  return (
    <a.Container>
      <a.SectionTitle>공개 여부</a.SectionTitle>
      <a.Note>[이름] 상세페이지에 닉네임과 프로필 사진이 노출됩니다.</a.Note>
      <a.Note>[닉네임] 상세페이지에 {nickname}(으)로 표시됩니다.</a.Note>
      <a.Wrap>
        <a.Button $active={isPublic === false} onClick={() => setIsPublic(false)}>
          <a.SubWrap>
            <a.RadioInput
              type="radio"
              name="isPublic"
              checked={isPublic === false}
              readOnly
            />
            이름 공개
          </a.SubWrap>
          <a.Img />
          <a.Name>{name}</a.Name>
        </a.Button>
        <a.Button $active={isPublic === true} onClick={() => setIsPublic(true)}>
          <a.SubWrap>
            <a.RadioInput
              type="radio"
              name="isPublic"
              checked={isPublic === true}
              readOnly
            />
            닉네임 공개
          </a.SubWrap>
          <a.Img />
          <a.Name>{nickname}</a.Name>
        </a.Button>
      </a.Wrap>
    </a.Container>
  )
}

export default AnonymousSection