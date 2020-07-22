import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import DataLineDataLine10cardinality_typeLForm from './forms/data-line-data-line10-cardinality-type-l';
import DataLineDataLine10catalogLForm from './forms/data-line-data-line10-catalog-l';
import DataLineDataLine10characteristic_typeLForm from './forms/data-line-data-line10-characteristic-type-l';
import DataLineDataLine10contragentLForm from './forms/data-line-data-line10-contragent-l';
import DataLineDataLine10customer_aclLForm from './forms/data-line-data-line10-customer-acl-l';
import DataLineDataLine10customerLForm from './forms/data-line-data-line10-customer-l';
import DataLineDataLine10dbaLForm from './forms/data-line-data-line10-dba-l';
import DataLineDataLine10dictionaryLForm from './forms/data-line-data-line10-dictionary-l';
import DataLineDataLine10dictionary_valueLForm from './forms/data-line-data-line10-dictionary-value-l';
import DataLineDataLine10grpLForm from './forms/data-line-data-line10-grp-l';
import DataLineDataLine10order_itemLForm from './forms/data-line-data-line10-order-item-l';
import DataLineDataLine10order_stateLForm from './forms/data-line-data-line10-order-state-l';
import DataLineDataLine10product_catalogLForm from './forms/data-line-data-line10-product-catalog-l';
import DataLineDataLine10resource_characteristicLForm from './forms/data-line-data-line10-resource-characteristic-l';
import DataLineDataLine10resource_characteristic_logLForm from './forms/data-line-data-line10-resource-characteristic-log-l';
import DataLineDataLine10resource_commonLForm from './forms/data-line-data-line10-resource-common-l';
import DataLineDataLine10resourceLForm from './forms/data-line-data-line10-resource-l';
import DataLineDataLine10resource_logLForm from './forms/data-line-data-line10-resource-log-l';
import DataLineDataLine10resource_sharedLForm from './forms/data-line-data-line10-resource-shared-l';
import DataLineDataLine10resource_spec_characteristicLForm from './forms/data-line-data-line10-resource-spec-characteristic-l';
import DataLineDataLine10resource_specLForm from './forms/data-line-data-line10-resource-spec-l';
import DataLineDataLine10resource_usage_specLForm from './forms/data-line-data-line10-resource-usage-spec-l';
import DataLineDataLine10roleLForm from './forms/data-line-data-line10-role-l';
import DataLineDataLine10service_characteristicLForm from './forms/data-line-data-line10-service-characteristic-l';
import DataLineDataLine10service_characteristic_logLForm from './forms/data-line-data-line10-service-characteristic-log-l';
import DataLineDataLine10serviceLForm from './forms/data-line-data-line10-service-l';
import DataLineDataLine10service_logLForm from './forms/data-line-data-line10-service-log-l';
import DataLineDataLine10service_orderLForm from './forms/data-line-data-line10-service-order-l';
import DataLineDataLine10service_spec_aclLForm from './forms/data-line-data-line10-service-spec-acl-l';
import DataLineDataLine10service_spec_characteristicLForm from './forms/data-line-data-line10-service-spec-characteristic-l';
import DataLineDataLine10service_specLForm from './forms/data-line-data-line10-service-spec-l';
import DataLineDataLine10service_stateLForm from './forms/data-line-data-line10-service-state-l';
import DataLineDataLine10service_usage_specLForm from './forms/data-line-data-line10-service-usage-spec-l';
import DataLineDataLine10user_groupLForm from './forms/data-line-data-line10-user-group-l';
import DataLineDataLine10user_resource_specLForm from './forms/data-line-data-line10-user-resource-spec-l';
import DataLineDataLine10user_roleLForm from './forms/data-line-data-line10-user-role-l';
import DataLineDataLine10user_service_orderLForm from './forms/data-line-data-line10-user-service-order-l';
import DataLineDataLine10user_service_specLForm from './forms/data-line-data-line10-user-service-spec-l';
import DataLineDataLine10usrLForm from './forms/data-line-data-line10-usr-l';
import DataLineDataLine10cardinality_typeEForm from './forms/data-line-data-line10-cardinality-type-e';
import DataLineDataLine10catalogEForm from './forms/data-line-data-line10-catalog-e';
import DataLineDataLine10characteristic_typeEForm from './forms/data-line-data-line10-characteristic-type-e';
import DataLineDataLine10contragentEForm from './forms/data-line-data-line10-contragent-e';
import DataLineDataLine10customer_aclEForm from './forms/data-line-data-line10-customer-acl-e';
import DataLineDataLine10customerEForm from './forms/data-line-data-line10-customer-e';
import DataLineDataLine10dbaEForm from './forms/data-line-data-line10-dba-e';
import DataLineDataLine10dictionaryEForm from './forms/data-line-data-line10-dictionary-e';
import DataLineDataLine10dictionary_valueEForm from './forms/data-line-data-line10-dictionary-value-e';
import DataLineDataLine10grpEForm from './forms/data-line-data-line10-grp-e';
import DataLineDataLine10order_itemEForm from './forms/data-line-data-line10-order-item-e';
import DataLineDataLine10order_stateEForm from './forms/data-line-data-line10-order-state-e';
import DataLineDataLine10product_catalogEForm from './forms/data-line-data-line10-product-catalog-e';
import DataLineDataLine10resource_characteristicEForm from './forms/data-line-data-line10-resource-characteristic-e';
import DataLineDataLine10resource_characteristic_logEForm from './forms/data-line-data-line10-resource-characteristic-log-e';
import DataLineDataLine10resource_commonEForm from './forms/data-line-data-line10-resource-common-e';
import DataLineDataLine10resourceEForm from './forms/data-line-data-line10-resource-e';
import DataLineDataLine10resource_logEForm from './forms/data-line-data-line10-resource-log-e';
import DataLineDataLine10resource_sharedEForm from './forms/data-line-data-line10-resource-shared-e';
import DataLineDataLine10resource_spec_characteristicEForm from './forms/data-line-data-line10-resource-spec-characteristic-e';
import DataLineDataLine10resource_specEForm from './forms/data-line-data-line10-resource-spec-e';
import DataLineDataLine10resource_usage_specEForm from './forms/data-line-data-line10-resource-usage-spec-e';
import DataLineDataLine10roleEForm from './forms/data-line-data-line10-role-e';
import DataLineDataLine10service_characteristicEForm from './forms/data-line-data-line10-service-characteristic-e';
import DataLineDataLine10service_characteristic_logEForm from './forms/data-line-data-line10-service-characteristic-log-e';
import DataLineDataLine10serviceEForm from './forms/data-line-data-line10-service-e';
import DataLineDataLine10service_logEForm from './forms/data-line-data-line10-service-log-e';
import DataLineDataLine10service_orderEForm from './forms/data-line-data-line10-service-order-e';
import DataLineDataLine10service_spec_aclEForm from './forms/data-line-data-line10-service-spec-acl-e';
import DataLineDataLine10service_spec_characteristicEForm from './forms/data-line-data-line10-service-spec-characteristic-e';
import DataLineDataLine10service_specEForm from './forms/data-line-data-line10-service-spec-e';
import DataLineDataLine10service_stateEForm from './forms/data-line-data-line10-service-state-e';
import DataLineDataLine10service_usage_specEForm from './forms/data-line-data-line10-service-usage-spec-e';
import DataLineDataLine10user_groupEForm from './forms/data-line-data-line10-user-group-e';
import DataLineDataLine10user_resource_specEForm from './forms/data-line-data-line10-user-resource-spec-e';
import DataLineDataLine10user_roleEForm from './forms/data-line-data-line10-user-role-e';
import DataLineDataLine10user_service_orderEForm from './forms/data-line-data-line10-user-service-order-e';
import DataLineDataLine10user_service_specEForm from './forms/data-line-data-line10-user-service-spec-e';
import DataLineDataLine10usrEForm from './forms/data-line-data-line10-usr-e';
import DataLineProtoOneCardinalityTypeModel from './models/data-line-proto-one-cardinality-type';
import DataLineProtoOneCatalogModel from './models/data-line-proto-one-catalog';
import DataLineProtoOneCharacteristicTypeModel from './models/data-line-proto-one-characteristic-type';
import DataLineProtoOneContragentModel from './models/data-line-proto-one-contragent';
import DataLineProtoOneCustomerAclModel from './models/data-line-proto-one-customer-acl';
import DataLineProtoOneCustomerModel from './models/data-line-proto-one-customer';
import DataLineProtoOneDbaModel from './models/data-line-proto-one-dba';
import DataLineProtoOneDictionaryValueModel from './models/data-line-proto-one-dictionary-value';
import DataLineProtoOneDictionaryModel from './models/data-line-proto-one-dictionary';
import DataLineProtoOneGrpModel from './models/data-line-proto-one-grp';
import DataLineProtoOneOrderItemModel from './models/data-line-proto-one-order-item';
import DataLineProtoOneOrderStateModel from './models/data-line-proto-one-order-state';
import DataLineProtoOneProductCatalogModel from './models/data-line-proto-one-product-catalog';
import DataLineProtoOneResourceCharacteristicLogModel from './models/data-line-proto-one-resource-characteristic-log';
import DataLineProtoOneResourceCharacteristicModel from './models/data-line-proto-one-resource-characteristic';
import DataLineProtoOneResourceCommonModel from './models/data-line-proto-one-resource-common';
import DataLineProtoOneResourceLogModel from './models/data-line-proto-one-resource-log';
import DataLineProtoOneResourceSharedModel from './models/data-line-proto-one-resource-shared';
import DataLineProtoOneResourceSpecCharacteristicModel from './models/data-line-proto-one-resource-spec-characteristic';
import DataLineProtoOneResourceSpecModel from './models/data-line-proto-one-resource-spec';
import DataLineProtoOneResourceUsageSpecModel from './models/data-line-proto-one-resource-usage-spec';
import DataLineProtoOneResourceModel from './models/data-line-proto-one-resource';
import DataLineProtoOneRoleModel from './models/data-line-proto-one-role';
import DataLineProtoOneServiceCharacteristicLogModel from './models/data-line-proto-one-service-characteristic-log';
import DataLineProtoOneServiceCharacteristicModel from './models/data-line-proto-one-service-characteristic';
import DataLineProtoOneServiceLogModel from './models/data-line-proto-one-service-log';
import DataLineProtoOneServiceOrderModel from './models/data-line-proto-one-service-order';
import DataLineProtoOneServiceSpecAclModel from './models/data-line-proto-one-service-spec-acl';
import DataLineProtoOneServiceSpecCharacteristicModel from './models/data-line-proto-one-service-spec-characteristic';
import DataLineProtoOneServiceSpecModel from './models/data-line-proto-one-service-spec';
import DataLineProtoOneServiceStateModel from './models/data-line-proto-one-service-state';
import DataLineProtoOneServiceUsageSpecModel from './models/data-line-proto-one-service-usage-spec';
import DataLineProtoOneServiceModel from './models/data-line-proto-one-service';
import DataLineProtoOneUserGroupModel from './models/data-line-proto-one-user-group';
import DataLineProtoOneUserResourceSpecModel from './models/data-line-proto-one-user-resource-spec';
import DataLineProtoOneUserRoleModel from './models/data-line-proto-one-user-role';
import DataLineProtoOneUserServiceOrderModel from './models/data-line-proto-one-user-service-order';
import DataLineProtoOneUserServiceSpecModel from './models/data-line-proto-one-user-service-spec';
import DataLineProtoOneUsrModel from './models/data-line-proto-one-usr';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'data-line-proto-one-cardinality-type': DataLineProtoOneCardinalityTypeModel,
    'data-line-proto-one-catalog': DataLineProtoOneCatalogModel,
    'data-line-proto-one-characteristic-type': DataLineProtoOneCharacteristicTypeModel,
    'data-line-proto-one-contragent': DataLineProtoOneContragentModel,
    'data-line-proto-one-customer-acl': DataLineProtoOneCustomerAclModel,
    'data-line-proto-one-customer': DataLineProtoOneCustomerModel,
    'data-line-proto-one-dba': DataLineProtoOneDbaModel,
    'data-line-proto-one-dictionary-value': DataLineProtoOneDictionaryValueModel,
    'data-line-proto-one-dictionary': DataLineProtoOneDictionaryModel,
    'data-line-proto-one-grp': DataLineProtoOneGrpModel,
    'data-line-proto-one-order-item': DataLineProtoOneOrderItemModel,
    'data-line-proto-one-order-state': DataLineProtoOneOrderStateModel,
    'data-line-proto-one-product-catalog': DataLineProtoOneProductCatalogModel,
    'data-line-proto-one-resource-characteristic-log': DataLineProtoOneResourceCharacteristicLogModel,
    'data-line-proto-one-resource-characteristic': DataLineProtoOneResourceCharacteristicModel,
    'data-line-proto-one-resource-common': DataLineProtoOneResourceCommonModel,
    'data-line-proto-one-resource-log': DataLineProtoOneResourceLogModel,
    'data-line-proto-one-resource-shared': DataLineProtoOneResourceSharedModel,
    'data-line-proto-one-resource-spec-characteristic': DataLineProtoOneResourceSpecCharacteristicModel,
    'data-line-proto-one-resource-spec': DataLineProtoOneResourceSpecModel,
    'data-line-proto-one-resource-usage-spec': DataLineProtoOneResourceUsageSpecModel,
    'data-line-proto-one-resource': DataLineProtoOneResourceModel,
    'data-line-proto-one-role': DataLineProtoOneRoleModel,
    'data-line-proto-one-service-characteristic-log': DataLineProtoOneServiceCharacteristicLogModel,
    'data-line-proto-one-service-characteristic': DataLineProtoOneServiceCharacteristicModel,
    'data-line-proto-one-service-log': DataLineProtoOneServiceLogModel,
    'data-line-proto-one-service-order': DataLineProtoOneServiceOrderModel,
    'data-line-proto-one-service-spec-acl': DataLineProtoOneServiceSpecAclModel,
    'data-line-proto-one-service-spec-characteristic': DataLineProtoOneServiceSpecCharacteristicModel,
    'data-line-proto-one-service-spec': DataLineProtoOneServiceSpecModel,
    'data-line-proto-one-service-state': DataLineProtoOneServiceStateModel,
    'data-line-proto-one-service-usage-spec': DataLineProtoOneServiceUsageSpecModel,
    'data-line-proto-one-service': DataLineProtoOneServiceModel,
    'data-line-proto-one-user-group': DataLineProtoOneUserGroupModel,
    'data-line-proto-one-user-resource-spec': DataLineProtoOneUserResourceSpecModel,
    'data-line-proto-one-user-role': DataLineProtoOneUserRoleModel,
    'data-line-proto-one-user-service-order': DataLineProtoOneUserServiceOrderModel,
    'data-line-proto-one-user-service-spec': DataLineProtoOneUserServiceSpecModel,
    'data-line-proto-one-usr': DataLineProtoOneUsrModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'proto-one': {
          caption: 'proto-one',
          title: 'proto-one',
          'data-line-data-line10-dictionary-l': {
            caption: 'data-line-data-line10-dictionary-l',
            title: 'data-line-data-line10-dictionary-l'
          },
          'data-line-data-line10-user-service-spec-l': {
            caption: 'data-line-data-line10-user-service-spec-l',
            title: 'data-line-data-line10-user-service-spec-l'
          },
          'data-line-data-line10-resource-characteristic-l': {
            caption: 'data-line-data-line10-resource-characteristic-l',
            title: 'data-line-data-line10-resource-characteristic-l'
          },
          'data-line-data-line10-user-group-l': {
            caption: 'data-line-data-line10-user-group-l',
            title: 'data-line-data-line10-user-group-l'
          },
          'data-line-data-line10-resource-spec-l': {
            caption: 'data-line-data-line10-resource-spec-l',
            title: 'data-line-data-line10-resource-spec-l'
          },
          'data-line-data-line10-resource-spec-characteristic-l': {
            caption: 'data-line-data-line10-resource-spec-characteristic-l',
            title: 'data-line-data-line10-resource-spec-characteristic-l'
          },
          'data-line-data-line10-service-l': {
            caption: 'data-line-data-line10-service-l',
            title: 'data-line-data-line10-service-l'
          },
          'data-line-data-line10-product-catalog-l': {
            caption: 'data-line-data-line10-product-catalog-l',
            title: 'data-line-data-line10-product-catalog-l'
          },
          'data-line-data-line10-role-l': {
            caption: 'data-line-data-line10-role-l',
            title: 'data-line-data-line10-role-l'
          },
          'data-line-data-line10-order-state-l': {
            caption: 'data-line-data-line10-order-state-l',
            title: 'data-line-data-line10-order-state-l'
          },
          'data-line-data-line10-customer-l': {
            caption: 'data-line-data-line10-customer-l',
            title: 'data-line-data-line10-customer-l'
          },
          'data-line-data-line10-service-characteristic-l': {
            caption: 'data-line-data-line10-service-characteristic-l',
            title: 'data-line-data-line10-service-characteristic-l'
          },
          'data-line-data-line10-resource-shared-l': {
            caption: 'data-line-data-line10-resource-shared-l',
            title: 'data-line-data-line10-resource-shared-l'
          },
          'data-line-data-line10-service-spec-characteristic-l': {
            caption: 'data-line-data-line10-service-spec-characteristic-l',
            title: 'data-line-data-line10-service-spec-characteristic-l'
          },
          'data-line-data-line10-resource-common-l': {
            caption: 'data-line-data-line10-resource-common-l',
            title: 'data-line-data-line10-resource-common-l'
          },
          'data-line-data-line10-customer-acl-l': {
            caption: 'data-line-data-line10-customer-acl-l',
            title: 'data-line-data-line10-customer-acl-l'
          },
          'data-line-data-line10-usr-l': {
            caption: 'data-line-data-line10-usr-l',
            title: 'data-line-data-line10-usr-l'
          },
          'data-line-data-line10-order-item-l': {
            caption: 'data-line-data-line10-order-item-l',
            title: 'data-line-data-line10-order-item-l'
          },
          'data-line-data-line10-service-spec-l': {
            caption: 'data-line-data-line10-service-spec-l',
            title: 'data-line-data-line10-service-spec-l'
          },
          'data-line-data-line10-service-state-l': {
            caption: 'data-line-data-line10-service-state-l',
            title: 'data-line-data-line10-service-state-l'
          },
          'data-line-data-line10-user-service-order-l': {
            caption: 'data-line-data-line10-user-service-order-l',
            title: 'data-line-data-line10-user-service-order-l'
          },
          'data-line-data-line10-contragent-l': {
            caption: 'data-line-data-line10-contragent-l',
            title: 'data-line-data-line10-contragent-l'
          },
          'data-line-data-line10-catalog-l': {
            caption: 'data-line-data-line10-catalog-l',
            title: 'data-line-data-line10-catalog-l'
          },
          'data-line-data-line10-resource-characteristic-log-l': {
            caption: 'data-line-data-line10-resource-characteristic-log-l',
            title: 'data-line-data-line10-resource-characteristic-log-l'
          },
          'data-line-data-line10-resource-log-l': {
            caption: 'data-line-data-line10-resource-log-l',
            title: 'data-line-data-line10-resource-log-l'
          },
          'data-line-data-line10-grp-l': {
            caption: 'data-line-data-line10-grp-l',
            title: 'data-line-data-line10-grp-l'
          },
          'data-line-data-line10-resource-l': {
            caption: 'data-line-data-line10-resource-l',
            title: 'data-line-data-line10-resource-l'
          },
          'data-line-data-line10-user-role-l': {
            caption: 'data-line-data-line10-user-role-l',
            title: 'data-line-data-line10-user-role-l'
          },
          'data-line-data-line10-service-spec-acl-l': {
            caption: 'data-line-data-line10-service-spec-acl-l',
            title: 'data-line-data-line10-service-spec-acl-l'
          },
          'data-line-data-line10-service-characteristic-log-l': {
            caption: 'data-line-data-line10-service-characteristic-log-l',
            title: 'data-line-data-line10-service-characteristic-log-l'
          },
          'data-line-data-line10-service-log-l': {
            caption: 'data-line-data-line10-service-log-l',
            title: 'data-line-data-line10-service-log-l'
          },
          'data-line-data-line10-resource-usage-spec-l': {
            caption: 'data-line-data-line10-resource-usage-spec-l',
            title: 'data-line-data-line10-resource-usage-spec-l'
          },
          'data-line-data-line10-cardinality-type-l': {
            caption: 'data-line-data-line10-cardinality-type-l',
            title: 'data-line-data-line10-cardinality-type-l'
          },
          'data-line-data-line10-service-usage-spec-l': {
            caption: 'data-line-data-line10-service-usage-spec-l',
            title: 'data-line-data-line10-service-usage-spec-l'
          },
          'data-line-data-line10-user-resource-spec-l': {
            caption: 'data-line-data-line10-user-resource-spec-l',
            title: 'data-line-data-line10-user-resource-spec-l'
          },
          'data-line-data-line10-service-order-l': {
            caption: 'data-line-data-line10-service-order-l',
            title: 'data-line-data-line10-service-order-l'
          },
          'data-line-data-line10-characteristic-type-l': {
            caption: 'data-line-data-line10-characteristic-type-l',
            title: 'data-line-data-line10-characteristic-type-l'
          },
          'data-line-data-line10-dictionary-value-l': {
            caption: 'data-line-data-line10-dictionary-value-l',
            title: 'data-line-data-line10-dictionary-value-l'
          },
          'data-line-data-line10-dba-l': {
            caption: 'data-line-data-line10-dba-l',
            title: 'data-line-data-line10-dba-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'data-line-data-line10-cardinality-type-l': DataLineDataLine10cardinality_typeLForm,
    'data-line-data-line10-catalog-l': DataLineDataLine10catalogLForm,
    'data-line-data-line10-characteristic-type-l': DataLineDataLine10characteristic_typeLForm,
    'data-line-data-line10-contragent-l': DataLineDataLine10contragentLForm,
    'data-line-data-line10-customer-acl-l': DataLineDataLine10customer_aclLForm,
    'data-line-data-line10-customer-l': DataLineDataLine10customerLForm,
    'data-line-data-line10-dba-l': DataLineDataLine10dbaLForm,
    'data-line-data-line10-dictionary-l': DataLineDataLine10dictionaryLForm,
    'data-line-data-line10-dictionary-value-l': DataLineDataLine10dictionary_valueLForm,
    'data-line-data-line10-grp-l': DataLineDataLine10grpLForm,
    'data-line-data-line10-order-item-l': DataLineDataLine10order_itemLForm,
    'data-line-data-line10-order-state-l': DataLineDataLine10order_stateLForm,
    'data-line-data-line10-product-catalog-l': DataLineDataLine10product_catalogLForm,
    'data-line-data-line10-resource-characteristic-l': DataLineDataLine10resource_characteristicLForm,
    'data-line-data-line10-resource-characteristic-log-l': DataLineDataLine10resource_characteristic_logLForm,
    'data-line-data-line10-resource-common-l': DataLineDataLine10resource_commonLForm,
    'data-line-data-line10-resource-l': DataLineDataLine10resourceLForm,
    'data-line-data-line10-resource-log-l': DataLineDataLine10resource_logLForm,
    'data-line-data-line10-resource-shared-l': DataLineDataLine10resource_sharedLForm,
    'data-line-data-line10-resource-spec-characteristic-l': DataLineDataLine10resource_spec_characteristicLForm,
    'data-line-data-line10-resource-spec-l': DataLineDataLine10resource_specLForm,
    'data-line-data-line10-resource-usage-spec-l': DataLineDataLine10resource_usage_specLForm,
    'data-line-data-line10-role-l': DataLineDataLine10roleLForm,
    'data-line-data-line10-service-characteristic-l': DataLineDataLine10service_characteristicLForm,
    'data-line-data-line10-service-characteristic-log-l': DataLineDataLine10service_characteristic_logLForm,
    'data-line-data-line10-service-l': DataLineDataLine10serviceLForm,
    'data-line-data-line10-service-log-l': DataLineDataLine10service_logLForm,
    'data-line-data-line10-service-order-l': DataLineDataLine10service_orderLForm,
    'data-line-data-line10-service-spec-acl-l': DataLineDataLine10service_spec_aclLForm,
    'data-line-data-line10-service-spec-characteristic-l': DataLineDataLine10service_spec_characteristicLForm,
    'data-line-data-line10-service-spec-l': DataLineDataLine10service_specLForm,
    'data-line-data-line10-service-state-l': DataLineDataLine10service_stateLForm,
    'data-line-data-line10-service-usage-spec-l': DataLineDataLine10service_usage_specLForm,
    'data-line-data-line10-user-group-l': DataLineDataLine10user_groupLForm,
    'data-line-data-line10-user-resource-spec-l': DataLineDataLine10user_resource_specLForm,
    'data-line-data-line10-user-role-l': DataLineDataLine10user_roleLForm,
    'data-line-data-line10-user-service-order-l': DataLineDataLine10user_service_orderLForm,
    'data-line-data-line10-user-service-spec-l': DataLineDataLine10user_service_specLForm,
    'data-line-data-line10-usr-l': DataLineDataLine10usrLForm,
    'data-line-data-line10-cardinality-type-e': DataLineDataLine10cardinality_typeEForm,
    'data-line-data-line10-catalog-e': DataLineDataLine10catalogEForm,
    'data-line-data-line10-characteristic-type-e': DataLineDataLine10characteristic_typeEForm,
    'data-line-data-line10-contragent-e': DataLineDataLine10contragentEForm,
    'data-line-data-line10-customer-acl-e': DataLineDataLine10customer_aclEForm,
    'data-line-data-line10-customer-e': DataLineDataLine10customerEForm,
    'data-line-data-line10-dba-e': DataLineDataLine10dbaEForm,
    'data-line-data-line10-dictionary-e': DataLineDataLine10dictionaryEForm,
    'data-line-data-line10-dictionary-value-e': DataLineDataLine10dictionary_valueEForm,
    'data-line-data-line10-grp-e': DataLineDataLine10grpEForm,
    'data-line-data-line10-order-item-e': DataLineDataLine10order_itemEForm,
    'data-line-data-line10-order-state-e': DataLineDataLine10order_stateEForm,
    'data-line-data-line10-product-catalog-e': DataLineDataLine10product_catalogEForm,
    'data-line-data-line10-resource-characteristic-e': DataLineDataLine10resource_characteristicEForm,
    'data-line-data-line10-resource-characteristic-log-e': DataLineDataLine10resource_characteristic_logEForm,
    'data-line-data-line10-resource-common-e': DataLineDataLine10resource_commonEForm,
    'data-line-data-line10-resource-e': DataLineDataLine10resourceEForm,
    'data-line-data-line10-resource-log-e': DataLineDataLine10resource_logEForm,
    'data-line-data-line10-resource-shared-e': DataLineDataLine10resource_sharedEForm,
    'data-line-data-line10-resource-spec-characteristic-e': DataLineDataLine10resource_spec_characteristicEForm,
    'data-line-data-line10-resource-spec-e': DataLineDataLine10resource_specEForm,
    'data-line-data-line10-resource-usage-spec-e': DataLineDataLine10resource_usage_specEForm,
    'data-line-data-line10-role-e': DataLineDataLine10roleEForm,
    'data-line-data-line10-service-characteristic-e': DataLineDataLine10service_characteristicEForm,
    'data-line-data-line10-service-characteristic-log-e': DataLineDataLine10service_characteristic_logEForm,
    'data-line-data-line10-service-e': DataLineDataLine10serviceEForm,
    'data-line-data-line10-service-log-e': DataLineDataLine10service_logEForm,
    'data-line-data-line10-service-order-e': DataLineDataLine10service_orderEForm,
    'data-line-data-line10-service-spec-acl-e': DataLineDataLine10service_spec_aclEForm,
    'data-line-data-line10-service-spec-characteristic-e': DataLineDataLine10service_spec_characteristicEForm,
    'data-line-data-line10-service-spec-e': DataLineDataLine10service_specEForm,
    'data-line-data-line10-service-state-e': DataLineDataLine10service_stateEForm,
    'data-line-data-line10-service-usage-spec-e': DataLineDataLine10service_usage_specEForm,
    'data-line-data-line10-user-group-e': DataLineDataLine10user_groupEForm,
    'data-line-data-line10-user-resource-spec-e': DataLineDataLine10user_resource_specEForm,
    'data-line-data-line10-user-role-e': DataLineDataLine10user_roleEForm,
    'data-line-data-line10-user-service-order-e': DataLineDataLine10user_service_orderEForm,
    'data-line-data-line10-user-service-spec-e': DataLineDataLine10user_service_specEForm,
    'data-line-data-line10-usr-e': DataLineDataLine10usrEForm
  },

});

export default translations;
