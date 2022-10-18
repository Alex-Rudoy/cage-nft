import classNames from 'classnames';
import { TFunction } from 'i18next';

import { Badge, BadgeColorsEnum } from '@components/Badge';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';
import { columnConfigType } from '@components/Table';
import { FontWeightEnum, Text, TextVariantsEnum } from '@components/Text';

import { semanticDateFromTimestamp } from '@utils/semanticDateFromTimestamp';
import { CustomerShortDataType } from '@store/customers/customers/customers.types';

import styles from './CustomersTable.module.scss';

const channelIconMap = {
  email: IconsEnum.mail,
  sms: IconsEnum.message,
};

export const customersTableColumns = (
  translate: TFunction,
  fromSegment: boolean,
  goToUserPage: (userId: string, index) => void
): columnConfigType<CustomerShortDataType>[] => [
  {
    id: 'name',
    name: translate('customers:table.headers.name'),
    sortable: !fromSegment,
    cellRenderer: (data, index) => (
      <div
        className={styles.cellContainer}
        style={{ cursor: 'pointer' }}
        onClick={() => goToUserPage(data.id, index)}
      >
        <Text
          variant={TextVariantsEnum.Text_sm}
          fontWeight={FontWeightEnum.Medium}
        >
          {data.name}
        </Text>
      </div>
    ),
  },
  {
    id: 'email',
    name: translate('customers:table.headers.email'),
    sortable: !fromSegment,
    cellRenderer: (data) => (
      <Text
        variant={TextVariantsEnum.Text_sm}
        fontWeight={FontWeightEnum.Normal}
      >
        {data.email}
      </Text>
    ),
  },
  {
    id: 'tags',
    name: translate('customers:table.headers.tags'),
    sortable: false,
    cellRenderer: (data) => (
      <div className={classNames(styles.cellContainer, styles.badges)}>
        {!!data.tags[0] && (
          <Badge color={BadgeColorsEnum.primary} text={data.tags[0]} />
        )}
        {data.tags.length > 1 && (
          <Badge
            color={BadgeColorsEnum.gray}
            text={`+${data.tags.length - 1}`}
          />
        )}
      </div>
    ),
  },
  {
    id: 'channel',
    name: translate('customers:table.headers.channel'),
    sortable: false,
    cellRenderer: (data) => (
      <div className={styles.cellContainer}>
        {data.channels.map((channel) =>
          channelIconMap[channel] ? (
            <div className={styles.channel} key={channel}>
              <SvgIcon
                src={channelIconMap[channel]}
                color="gray-500"
                size={18}
              />
            </div>
          ) : null
        )}
      </div>
    ),
  },
  {
    id: 'last_seen',
    name: translate('customers:table.headers.last_seen'),
    sortable: !fromSegment,
    cellRenderer: (data) => (
      <>
        <Text
          variant={TextVariantsEnum.Text_sm}
          fontWeight={FontWeightEnum.Normal}
        >
          {semanticDateFromTimestamp(data.last_seen, translate)}
        </Text>
      </>
    ),
  },
  {
    id: 'total_spent',
    name: translate('customers:table.headers.total_spent'),
    sortable: !fromSegment,
    cellRenderer: (data) => (
      <>
        <Text
          variant={TextVariantsEnum.Text_sm}
          fontWeight={FontWeightEnum.Normal}
        >
          {`$${data.revenue || 0}`}
        </Text>
      </>
    ),
  },
];
