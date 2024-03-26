package com.giveus.funding.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class FundingParticipantListRes {

    private int memberFundingNo;
    private String name;
    private int amount;
    private LocalDateTime createdAt;
    private Boolean isPublic;
    private String imageUrl;
}