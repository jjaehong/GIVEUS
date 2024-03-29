package com.giveus.admin.service.impl;

import com.giveus.admin.common.dto.CreateSuccessDto;
import com.giveus.admin.dto.request.FundingCreateReq;
import com.giveus.admin.dto.request.FundingUsageCreateReq;
import com.giveus.admin.dto.response.FundingDetailsRes;
import com.giveus.admin.dto.response.FundingListRes;
import com.giveus.admin.entity.Funding;
import com.giveus.admin.entity.FundingStatusHistory;
import com.giveus.admin.exception.FundingNotFoundException;
import com.giveus.admin.repository.FundingRepository;
import com.giveus.admin.repository.FundingStatusHistoryRepository;
import com.giveus.admin.service.FundingService;
import com.giveus.admin.service.MessageService;
import com.giveus.admin.service.UsageHistoryService;
import com.giveus.admin.transfer.FundingStatusHistoryTransfer;
import com.giveus.admin.transfer.FundingTransfer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class FundingServiceImpl implements FundingService {
    private final FundingRepository fundingRepository;
    private final FundingStatusHistoryRepository fundingStatusRepository;
    private final MessageService messageService;

    @Override
    @Transactional
    public CreateSuccessDto createFunding(FundingCreateReq fundingCreateReq) {

        // 펀딩 등록
        Funding funding = FundingTransfer.dtoToEntity(fundingCreateReq);
        FundingStatusHistory status = FundingStatusHistoryTransfer.dtoToEntityCreated(funding);
        funding.addStatus(status);
        String regId = generateRegId();
        funding.setRegId(regId);
        Funding savedFunding = fundingRepository.save(funding);

        // 문자 전송
        String msg = "[giveus]\n" +
                "안녕하세요, 기브어스입니다.\n" +
                "아래의 링크에서 펀딩 추가정보를 입력해주세요!\n" +
                "https://giveus.site/giveus/";
        messageService.sendMessage(funding.getPhone(), msg, regId);

        return new CreateSuccessDto(savedFunding.getFundingNo());
    }

    /**
     * 펀딩 등록 고유 ID를 생성하는 메서드입니다.
     *
     * @return 생성한 고유 ID
     */
    private String generateRegId() {
        String random = UUID.randomUUID().toString();
        random = random.replace("-", "");
        random = random.substring(0, 16);
        return random;
    }

    @Override
    public List<FundingListRes> getFundingList(int adminNo) {
        return fundingRepository.getFundingList(adminNo);
    }

    @Override
    public Funding getFundingEntity(int fundingNo) {
        return
                fundingRepository.findFundingByFundingNo(fundingNo)
                        .orElseThrow(FundingNotFoundException::new);
    }


    @Override
    public FundingDetailsRes getFunding(int fundingNo) {
        return fundingRepository.getFunding(fundingNo);
    }

    @Override
    public boolean isDoneFunding(Funding funding) {
        FundingStatusHistory status = fundingStatusRepository.findDistinctByFundingOrderByCreatedAtDesc(funding);
        return !status.getStatus().equals("진행중");
    }

}
