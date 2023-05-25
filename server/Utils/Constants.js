// Imports

module.exports = {
    APPLICATION: {
        BOOTSTRAP_SERVER: {
            CODE: 'bootstrap_server',
            NAME: 'Bootstrap Server'
        },
        CACHE: {
            CODE: 'cache',
            NAME: 'Cache'
        },
        UGS_SERVER: {
            CODE: 'ugs_server',
            NAME: 'UGS Server'
        },
        ACTIONABLE_TASKS: {
            CREATE: 'task_create',
            UPDATE: 'task_update',
            COMMENT: {
                CREATE: 'task_comment_create',
                UPDATE: 'task_comment_update',
                DELETE: 'task_comment_delete'
            },
            HISTORY_TYPE: {
                COMMENT: "comment",
                HISTORY: "history"
            },
            STATUS: {
                OPEN: 'open',
                //ASSIGNED: 'assigned',
                CLOSED: 'closed',
                IN_PROGRESS: 'in_progress',
                //DECLINED: 'declined'
            },
            CRITICALITY: {
                HIGH: 'high',
                MEDIUM: 'medium',
                LOW: 'low'
            },
            TYPE: {
                ASSET: 'asset',
                NODE: 'node',
            }
        },
        JOB: {
            ALERT: {
                CODE: 'job_alert',
                NAME: 'Job - Alert'
            },
            ADD_DAT_TO_DEVICE: {
                CODE: 'job_add_dat_to_device',
                NAME: 'Job - Add DAT to Device'
            },
            ASSIGN_ASSETTYPE_TO_DEVICE: {
                CODE: 'job_assign_assetyype_to_device',
                NAME: 'Job - Add ASSETTYPE to Device'
            },
            SITE_INVENTORY_SETTINGS: {
                CODE: 'job_site_inventory_settings',
                NAME: 'Job - Add Site Settings'
            },
            ADD_DAT_TO_OTHER_DAT_USER: {
                CODE: 'job_add_dat_to_other_dat_user',
                NAME: 'Job - Add DAT to Other DAT User'
            },
            ASSIGN_DAT_TO_DEVICE: {
                CODE: 'job_assign_dat_to_device',
                NAME: 'Job - Assign DAT to Device'
            },
            OFFLINE_DATA_INGESTION: {
                CODE: 'job_offline_data_ingestion',
                NAME: 'Job - Offline Data Ingestion'
            },
            OFFLINE_DA_DAILY_SUMMARY: {
                CODE: 'job_offline_da_daily_summary',
                NAME: 'Job - Offline Da Daily Summary'
            },
            OFFLINE_EVENT_SUMMARY: {
                CODE: 'job_offline_event_summary',
                NAME: 'Job - Offline Event Summary'
            },
            ASSOCIATE_USER_AND_PERSON_TRACKER_DEVICE: {
                CODE: 'job_associate_user_and_person_tracker_device',
                NAME: 'Job - Associate User and Person Tracker Device'
            },
            ASSOCIATE_USER_AND_STUDENT_TRACKER_DEVICE: {
                CODE: 'job_associate_user_and_student_tracker_device',
                NAME: 'Job - Associate User and student Tracker Device'
            },
            ASSOCIATE_USER_AND_VEHICLE_TRACKER_DEVICE: {
                CODE: 'job_associate_user_and_vehicle_tracker_device',
                NAME: 'Job - Associate User and Vehicle Tracker Device'
            },
            MDG_V1_ATTACH: {
                CODE: 'job_MDG_V1_ATTACH',
                NAME: 'Job - Attach MDG DEVICE TO TOWER'
            },
            MDG_V1_DETACH: {
                CODE: 'job_MDG_V1_DETACH',
                NAME: 'Job - Detach MDG DEVICE FROM TOWER'
            },
            ASSOCIATE_USER_STUDENT_REFERENCE_IMAGE: {
                CODE: 'job_associate_user_student_reference_image',
                NAME: 'Job - Associate User Student Reference Image'
            },
            DELETE_DAT: {
                CODE: 'job_delete_dat',
                NAME: 'Job - Delete DAT'
            },
            KPA_QUERY_REPORT_DOWNLOAD:{
                CODE: 'job_kpa_query_report_download',
                NAME: 'Job - KPA Query Report Download'
            },
            TOWER_DATA_INGESTION:{
                CODE: 'job_tower_data_ingestion',
                NAME: 'Job - Tower Data Ingestion'
            },
            DELETE_DEVICE: {
                CODE: 'job_delete_device',
                NAME: 'Job - Delete Device'
            },
            REPORT: {
                CODE: 'job_report',
                NAME: 'Job - Report'
            },
            CONTACT_TRACING: {
                CODE: 'job_contact_tracing',
                NAME: 'Job - Contact Tracing'
            },
            DELETE_ENTITY: {
                CODE: 'job_delete_entity',
                NAME: 'Job - Delete Entity'
            },
            DELETE_ENTITY_SCHEDULER: {
                CODE: 'job_delete_entity_scheduler',
                NAME: 'Job - Delete Entity Scheduler'
            },
            UPDATE_ENTITY: {
                CODE: 'job_update_entity',
                NAME: 'Job - Update Entity'
            },
            DEVICE_REPORT: {
                CODE: 'job_device_report',
                NAME: 'Job - Device Report'
            },
            DEVICE_USAGE_REPORT: {
                CODE: 'job_device_usage_report',
                NAME: 'Job - Device Usage Report'
            },
            DEVICE_USAGE_REPORT_BY_DAT: {
                CODE: 'job_device_usage_report_by_dat',
                NAME: 'Job - Device Usage Report by DAT'
            },
            EDIT_DAT: {
                CODE: 'job_edit_dat',
                NAME: 'Job - Edit DAT'
            },
            GENERATE_RRL_STATS: {
                CODE: 'job_generate_rrl_stats',
                NAME: 'Job - Generate RRL stats'
            },
            GENERATE_TOWER_STATS: {
                CODE: 'job_generate_tower_stats',
                NAME: 'Job - Generate TOWER stats'
            },
            MOVE_DAT_OF_DEVICE: {
                CODE: 'job_move_dat_of_device',
                NAME: 'Job - Move DAT of Device'
            },
            REMOVE_DAT_FROM_DEVICE: {
                CODE: 'job_remove_dat_from_device',
                NAME: 'Job - Remove DAT from Device'
            },
            RIGHT_TO_DELETE: {
                CODE: 'job_right_to_delete',
                NAME: 'Job - Remove user related backups'
            },
            RIGHT_TO_KNOW: {
                CODE: 'job_right_to_know',
                NAME: 'Job - explore user related settings'
            },
            TRIGGER_DEVICE_CMD: {
                CODE: 'job_trigger_device_cmd',
                NAME: 'Job - Trigger Device CMD'
            },
            DOWNLOAD: {
                CODE: 'job_download',
                NAME: 'Job - Download'
            },
            BUDGET_SETTINGS: {
                CODE: 'job_budget_settings',
                NAME: 'Job - Budget Settings'
            },
            MERGED_JOBS: {
                JOB_DEVICE_ONBOARD_MOVE_DELETE: {
                    CODE: 'job_device_onboard_move_delete',
                    NAME: 'Job - Device onboard, move and delete'
                },
                JOB_REPORT_DEVICE_DETAILS: {
                    CODE: 'job_report_device_details',
                    NAME: 'Job - Report and download device details'
                },
                JOB_DAT_EDIT_DELETE_ADD_TO_USER: {
                    CODE: 'job_dat_edit_delete_add_to_user',
                    NAME: 'Job - Dat edit, Delete and Add to user'
                }
            },
            SCHEDULER_TASKS: {
                CODE: 'scheduler_tasks',
                NAME: 'Job - Scheduler-tasks'
            }
        },
        MESSAGE_PROCESSOR: {
            ALERT: {
                CODE: 'message_processor_alert',
                NAME: 'Message Processor - Alert'
            },
            HES: {
                CODE: 'message_processor_hes_readings_event',
                NAME: 'Message Processor - hes readings event'
            },
            HES_EVENTS: {
                CODE: 'message_processor_hes_readings_event',
                NAME: 'Message Processor - hes device events'
            },
            H2FC_EVENTS: {
                CODE: 'message_processor_h2fc_readings_event_raw',
                NAME: 'Message Processor - h2fc alert events'
            },
            AUDIT_LOG: {
                CODE: 'message_processor_audit_log',
                NAME: 'Message Processor - Audit Log'
            },
            AWS_IOT_EVENT: {
                CODE: 'message_processor_aws_iot_event',
                NAME: 'Message Processor - AWS IoT Event'
            },
            FR_LOG: {
                CODE: 'message_processor_fr_log',
                NAME: 'Message Processor - FR Log'
            },
            GENERIC: {
                CODE: 'message_processor',
                NAME: 'Message Processor'
            },
            KAFKA_DEVICE_EVENT: {
                CODE: 'message_processor_kafka_device_event',
                NAME: 'Message Processor - Kafka Device Event'
            },
            KAFKA_EVENT: {
                CODE: 'message_processor_kafka_event',
                NAME: 'Message Processor - Kafka Event'
            },
            INSIGHTS: {
                CODE: 'message_processor_insights',
                NAME: 'Message Processor - Insights'
            },
            ZABBIX: {
                CODE: 'message_processor_zabbix',
                NAME: 'Message Processor - zabbix'
            },
            ZABBIX_ALERT: {
                CODE: 'message_processor_zabbix-alert',
                NAME: 'Message Processor - zabbix-alert'
            },
            KAFKA_HES_COMMAND: {
                CODE: 'message_processor_kafka_hes_command',
                NAME: 'Message Processor - kafka hes command'
            },
            JNOPS_NOTIFICATION: {
                CODE: 'message_processor_jnops_notification',
                NAME: 'Message Processor - Jnops Notification'
            },
            KAFKA_FOTA: {
                CODE: 'message_processor_kafka_fota',
                NAME: 'Message Processor - Kafka Fota'
            },
            KAFKA_REVERSE_EVENT: {
                CODE: 'message_processor_kafka_reverse_event',
                NAME: 'Message Processor - Kafka Reverse Event'
            },
            KAFKA_DBEM_DATA: {
                CODE: 'message_processor_kafka_dbem_data',
                NAME: 'Message Processor - Kafka DBEM Data'
            },
            KAFKA_DBEM_ENERGY_DATA: {
                CODE: 'message_processor_kafka_dbem_energy_data',
                NAME: 'Message Processor - Kafka DBEM Energy Data'
            },
            LKMS_LOG: {
                CODE: 'message_processor_lkms_log',
                NAME: 'Message Processor - LKMS Log'
            },
            STOS_NTFY_B2C_CUSTOMER: {
                CODE: 'message_processor_stos_ntfy_b2c_customer',
                NAME: 'Message Processor - StoS Notification B2C Customer'
            },
            STOS_NTFY_B2C_CUSTOMER_DEVICE: {
                CODE: 'message_processor_stos_ntfy_b2c_customer_device',
                NAME: 'Message Processor - StoS Notification B2C Customer Device'
            },
            STOS_NTFY_B2B_DOMAIN: {
                CODE: 'message_processor_stos_ntfy_b2b_domain',
                NAME: 'Message Processor - StoS Notification B2B Domain'
            },
            STOS_NTFY_B2B_DOMAIN_DEVICE: {
                CODE: 'message_processor_stos_ntfy_b2b_domain_device',
                NAME: 'Message Processor - StoS Notification B2B Domain Device'
            },
            STOS_NTFY_CUSTOMER_CREDENTIAL: {
                CODE: 'message_processor_stos_ntfy_customer_credential',
                NAME: 'Message Processor - StoS Notification Customer Credential'
            },
            SKIP_DEVICE_UPDATE_FOR_EVC: ['511', '512', '632']
        },
        FILE_SERVER: {
            CODE: 'file_server',
            NAME: 'File Server'
        },
        SMPP_SERVER: {
            CODE: 'smpp_server',
            NAME: 'SMPP Server'
        },
        AUDIT_SERVER: {
            CODE: 'audit_server',
            NAME: 'Audit Server'
        },
        ALERT_SERVER: {
            CODE: 'alert_server',
            NAME: 'Alert Server'
        },
        NOTIFICATION_SERVER: {
            CODE: 'notification_server',
            NAME: 'Notification Server'
        },
        SCHEDULER: {
            ALERT: {
                CODE: "scheduler_alert",
                NAME: "Scheduler - Alert",
                TYPE: {
                    COMMUNICATION_FAILURE: 'communication_failure',
                    REPORT_SUBSCRIPTION: 'report_subscription',
                    OVER_BUDGET: 'over_budget',
                    DATA_INGESTION: 'data_ingestion'
                }
            },
            CONTACT_TRACING: {
                CODE: "scheduler_contact_tracing",
                NAME: "Scheduler - Contact Tracing"
            },
            SIM_EVENT: {
                CODE: "scheduler_sim_event",
                NAME: "Scheduler - SIM Event"
            },
            FILE_DOWNLOAD: {
                SFTP: {
                    CODE: 'scheduler_file_download_sftp',
                    NAME: 'Scheduler - File Download - SFTP'
                }
            },
            INACTIVE_ENTITY: {
                CODE: 'scheduler_inactive_entity',
                NAME: 'Scheduler - Inactive Entity',
                TYPE: {
                    USER: 'user'
                }
            },
            DELETE_ENTITY: {
                CODE: 'scheduler_delete_entity',
                NAME: 'Scheduler - Delete Entity',
                TYPE: {
                    DEVICE: 'device',
                    DEVICE_SETTING: 'devicesetting',
                    DEVICE_STATUS: 'devicestatus'
                }
            },
            DG_EVENT: {
                CODE: "scheduler_dg_event",
                NAME: "Scheduler - DG Event"
            },
            METER_CONSUMPTIONS: {
                CODE: 'scheduler_meter_consumptions',
                NAME: 'Scheduler - Meter Consumptions'
            },
            EVENT_SUMMARY: {
                CODE: 'scheduler_event_summary',
                NAME: 'Scheduler - Event Summary'
            },
            INSTANTANEOUS_PROFILE: {
                CODE: 'scheduler_instantaneous_profile',
                NAME: 'Scheduler - Instantaneous Profile'
            },
            INSIGHTS: {
                CODE: 'scheduler_insights',
                NAME: 'Scheduler - Insights'
            },
            EXICOM: {
                CODE: 'scheduler_exicom',
                NAME: 'Scheduler - Exicom'
            },
            JC_ZABBIX_DATA: {
                CODE: 'scheduler_jc_zabbix_data',
                NAME: 'Scheduler - JC ZABBIX DATA'
            },
            SWAP_STATION_SUMMARY: {
                CODE: 'scheduler_swap_station_summary',
                NAME: 'Scheduler - Swap-Station Summary'
            },
            BAAS_EVENTS: {
                CODE: 'scheduler_baas_events',
                NAME: 'Scheduler - Baas Events',
                RECORD: {
                    LIMIT: 500
                }
            },
            VEHICLE: {
                CODE: 'scheduler_jhs_vehicle',
                NAME: 'Scheduler - JHS - Vehicle'
            },
            VEHICLE_ALERT: {
                CODE: 'scheduler_vehicle_alert',
                NAME: 'Scheduler - Vehicle - Alert',
                RECORD: {
                    LIMIT: 500
                }
            },
            RIDER:{
                CODE: 'scheduler_rider'
            },
            TS_EVENTS: {
                CODE: 'scheduler_ts_events',
                NAME: 'Scheduler - TS Events'
            },
            RRL_STATS: {
                CODE: 'scheduler_rrl_stats',
                NAME: 'Scheduler - RRL Stats',
                RECORD: {
                    LIMIT: 100
                },
                TYPE: {
                    DG_FUEL: 'dg_fuel',
                    DG_MONITOR: 'dg_monitor',
                    EVENT_STAT: 'event_stat',
                    METER_EVENT_STAT: 'meter_event_stat',
                    DAT_EVENT_STAT: 'dat_event_stat',
                    WATER_EVENT_STAT: 'water_event_stat',
                    WATER_ALERT_STAT: 'water_alert_stat',
                    GAS_EVENT_STAT: 'gas_event_stat',
                    GAS_ALERT_STAT: 'gas_alert_stat',
                    BMS_STAT: 'bms_stat'
                },
                EVENT: {
                    TYPE: {
                        WATER_EVENT: 'water_consumption',
                        WATER_ALERT: 'water_alert',
                        GAS_EVENT: 'gas_consumption',
                        GAS_ALERT: 'gas_alert',
                        DG_MONITOR: `fuelInLitres`
                    },
                    FIELD: {
                        WATER_EVENT: 'meter.waterConsumption',
                        WATER_CONSUMPTION: 'waterConsumption',
                        GAS_EVENT: 'meter.gasConsumption',
                        GAS_CONSUMPTION: 'gasConsumption',
                        DG_MONITOR: 'meter.fuelInLitres',
                        DG_FUEL: 'meter.fuelInLitres'
                    },
                    NON_ADDING_PARAMS: {
                        METER_EVENT: ["tms", "reason", "slaveId", "sensorInstanceId", "deviceMake", "deviceAppRebootReason", "deviceAppRebootIndicateReason", "value", "ignition", "sensorFriendlyName", "unit", "meteringParameters", "phase", "threshold", 'deviceMake'],
                        WATER_EVENT: ["tms", "reason", "slaveId", "sensorInstanceId", "deviceMake", "deviceAppRebootReason", "deviceAppRebootIndicateReason", "value", "ignition", "sensorFriendlyName", "unit", "meteringParameters", "phase", "threshold", 'deviceMake'],
                        WATER_ALERT: ["tms", "reason", "slaveId", "sensorInstanceId", "deviceMake", "deviceAppRebootReason", "deviceAppRebootIndicateReason", "value", "ignition", "sensorFriendlyName", "unit", "meteringParameters", "phase", "threshold", 'deviceMake'],
                        GAS_EVENT: ["tms", "reason", "slaveId", "sensorInstanceId", "deviceMake", "deviceAppRebootReason", "deviceAppRebootIndicateReason", "value", "ignition", "sensorFriendlyName", "unit", "meteringParameters", "phase", "threshold", 'deviceMake'],
                        GAS_ALERT: ["tms", "reason", "slaveId", "sensorInstanceId", "deviceMake", "deviceAppRebootReason", "deviceAppRebootIndicateReason", "value", "ignition", "sensorFriendlyName", "unit", "meteringParameters", "phase", "threshold", 'deviceMake'],
                    },
                    CURR_DIFF_PREV_FIELDS: {
                        METER_EVENT: ['activeEnergy', 'apparentEnergy', 'reactiveEnergy'],
                        WATER_EVENT: ['waterConsumption'],
                        GAS_EVENT: ['gasConsumption']
                    },
                    AVG_MAX_MEDIAN_MIN_FIELDS: {
                        METER_EVENT: ['activePower', 'activePowerBPhase', 'activePowerRPhase', 'activePowerYPhase', 'apparentPower', 'apparentPowerBPhase', 'apparentPowerRPhase', 'apparentPowerYPhase', 'currentBPhase', 'currentRPhase', 'currentTotal', 'currentYPhase', 'frequency', 'reactivePower', 'reactivePowerRPhase', 'reactivePowerYPhase', 'voltageBPhase', 'voltageBRPhase', 'voltageLineToLineAverage', 'voltageLineToNeutralAverage', 'voltageRPhase', 'voltageRYPhase', 'voltageYBPhase', 'voltageYPhase']
                    },
                    AVG_FIELDS: {
                        METER_EVENT: ['powerFactor', 'powerFactorBPhase', 'powerFactorRPhase', 'powerFactorYPhase']
                    }
                }
            },
            STALE_ENTITY: {
                CODE: 'scheduler_stale_entity',
                NAME: 'Scheduler - Stale Entity',
                TYPE: {
                    ALERT: 'alert',
                    ARCHIVE: 'archive',
                    LOG: 'log',
                    BLACKLISTED_TOKEN: 'blacklisted_token',
                    CACHE: 'cache',
                    EVENT: 'event',
                    INCIDENT: 'incident',
                    MESSAGE: 'message',
                }
            },
            UPDATE_ENTITY: {
                CODE: 'scheduler_update_entity',
                NAME: 'Scheduler - Update Entity',
                TYPE: {
                    ALERT: 'alert'
                }
            },
            SESSION_GROUP: {
                CODE: 'scheduler_session_group',
                NAME: 'Scheduler - Session Group'
            },
            TASK_SCHEDULER: {
                NAME: 'TASK SCHEDULER',
                CODE: 'task_scheduler',
                TYPE: {
                    TASKS: 'tasks'
                }
            },
            H2FC: {
                EVENT: {
                    DATA_INGESTION: {
                        FC: {
                            NAME: 'FC DATA INGESTION',
                            CODE: 'h2fc_fc_data_ingestion_scheduler',
                        },
                        NONFC: {
                            NAME: 'NON FC DATA INGESTION',
                            CODE: 'h2fc_non_fc_data_ingestion_scheduler',
                        },
                        NAME: 'DATA INGESTION',
                        CODE: 'h2fc_data_ingestion_scheduler',
                    },
                    DEVICE_DATA_UPDATION: {
                        NAME: 'DEVICE DATA UPDATION',
                        CODE: 'h2fc_device_data_updation_scheduler',
                    },
                    DEVICE_DATA_PARAMETERS: {
                        NAME: 'DEVICE DATA PARAMETERS',
                        CODE: 'h2fc_device_parameter_data_scheduler',
                    },
                    EVENTS_DATA_INGESTION: {
                        NAME: 'EVENT DATA INGESTION',
                        CODE: 'h2fc_device_event_data_updation_scheduler',
                    },
                    ZABBIX_DATA_INGESTION: {
                        NAME: 'ZABBIX DATA INGESTION',
                        CODE: 'h2fc_device_zabbix_data_ingestion_scheduler',
                    },
                    ZABBIX_MISSING_DATA_INGESTION: {
                        NAME: 'ZABBIX MISSING DATA INGESTION',
                        CODE: 'h2fc_device_zabbix_missing_data_ingestion_scheduler',
                    },
                    ZABBIX_HISTORY_DATA_UPDATION: {
                        NAME: 'ZABIX HISTORY DATA UPDATION',
                        CODE: 'h2fc_zabbix_history_data_updation_scheduler',
                    },
                    ZABBIX_MISSING_ALERT_DATA_INGESTION: {
                        NAME: 'ZABBIX MISSING ALERT DATA INGESTION',
                        CODE: 'h2fc_device_zabbix_missing_alert_data_ingestion_scheduler',
                    },

                },
                STATS: {
                    NAME: 'H2FC STATS SCHEDULER',
                    CODE: 'h2fc_stats_scheduler',
                },
                MDG_JHS_TRIP: {
                    CODE: "scheduler_mdg_jhs_trip",
                    NAME: "Scheduler - MDG JHS Trip"
                },
                MDG_JHS_VEHICLE: {
                    CODE: "scheduler_mdg_jhs_vehicle",
                    NAME: "Scheduler - MDG JHS Vehicle"
                },
                TYPE: {
                    ODMDG_FUEL: 'odmdg_fuel',
                    ODMDG_MONITOR: 'odmdg_monitor',
                    EVENT_STAT: 'event_stat',
                    METER_EVENT_STAT: 'meter_event_stat',
                    DAT_EVENT_STAT: 'dat_event_stat',
                    KPI_DASHBOARD_STATS: 'kpi_dashboard_stats',
                },
            },
            KPI_STATS: {
                CODE: 'scheduler_kpi_stats',
                NAME: 'Scheduler - KPI Stats'
            },
            IPCOLOTOWER_STATS: {
                CODE: 'scheduler_ipcolotower_stats',
                NAME: 'Scheduler - IPCOLOTOWER_STATS'
            },
        },
        TOOL: {
            BACKUP: {
                CODE: "tool_backup",
                NAME: "Tool - Backup",
            },
            CLEAR_ENTITY_VALUE: {
                CODE: "tool_clear_entity_value",
                NAME: "Tool - Clear Entity Value",
            },
            COMPARE_KEY_SETTINGS: {
                CODE: "tool_compare_key_settings",
                NAME: "Tool - Compare Key Settings",
            },
            CREATE_INDEXES: {
                CODE: "tool_create_indexes",
                NAME: "Tool - Create Indexes",
            },
            FR_LOG_READER: {
                CODE: "tool_fr_log_reader",
                NAME: "Tool - FR Log Reader",
            },
            LKMS_LOG_READER: {
                CODE: "tool_lkms_log_reader",
                NAME: "Tool - LKMS Log Reader",
            },
            DECIPHER_ENV_VARIABLES: {
                CODE: "tool_decipher_env_variables",
                NAME: "Tool - Decipher Env Variables",
            },
            DROP_ADMIN_COLLECTIONS: {
                CODE: "tool_drop_admin_collections",
                NAME: "Tool - Drop Admin Collections",
            },
            DROP_COLLECTIONS: {
                CODE: "tool_drop_collections",
                NAME: "Tool - Drop Collections",
            },
            ENCIPHER_ENV_VARIABLES: {
                CODE: "tool_encipher_env_variables",
                NAME: "Tool - Encipher Env Variables",
            },
            EVENTS_COUNTS: {
                CODE: "tool_events_counts",
                NAME: "Tool - Events Counts",
            },
            KAFKA_EVENT_OFFSET: {
                CODE: "tool_kafka_event_offset",
                NAME: "Tool - Kafka Event Offset",
            },
            LOAD_TEST: {
                CODE: "tool_load_test",
                NAME: "Tool - Load Test",
            },
            PARTNER_DEVICES: {
                CODE: "tool_partner_devices",
                NAME: "Tool - Partner Devices",
            },
            PARTNER_DEVICES_SCRIPT: {
                CODE: "tool_partner_devices_script",
                NAME: "Tool - Partner Devices Script",
            },
            REPORT: {
                CODE: "tool_report",
                NAME: "Tool - Report",
            },
            RESTORE: {
                CODE: "tool_restore",
                NAME: "Tool - Restore",
            },
            UPDATE_ENTITY_VALUE: {
                CODE: "tool_update_entity_value",
                NAME: "Tool - Update Entity Value",
            },
            UPDATE_SETTINGS_VALUE: {
                CODE: "tool_update_settings_value",
                NAME: "Tool - Update Settings Value",
            },
        },
        LAMBDA: {
            CODE: 'lambda',
            NAME: 'Lambda'
        },
        DLMS_ENGINE: {
            CODE: 'dlms_engine',
            NAME: 'DLMS Engine'
        },
        CONNECTORS: {
            CODE: 'connectors',
            NAME: 'Connectors'
        },
        EMAIL: {
            CODE: 'email',
            NAME: 'Email'
        },
        FCM: {
            CODE: 'fcm',
            NAME: 'FCM'
        },
        HTTP: {
            CODE: 'http',
            NAME: 'HTTP'
        },
        INTERCEPTORS: {
            CODE: 'interceptors',
            NAME: 'Interceptors'
        },
        SMS: {
            CODE: 'sms',
            NAME: 'SMS'
        },
        DG_EVENT: {
            CODE: 'dg-event',
            NAME: 'DG Event'
        },
        DATABASE: {
            CODE: 'database',
            NAME: 'Database'
        },
        SFTP: {
            CODE: 'sftp',
            NAME: 'SFTP'
        },
        PUBLISH: {
            CODE: 'publish',
            NAME: 'Publish'
        },
        SIM_BASED_TRACKING: {
            CODE: 'sim_based_tracking',
            NAME: 'Sim Based Tracking'
        },
        UTIL: {
            CODE: 'util',
            NAME: 'Util'
        }
    },
    AUTHORIZATION: {
        MFA: {
            DISABLE: 'disable',
            MANDATORY: 'mandatory',
            OPTIONAL: 'optional',
        },
    },
    JWT: {
        AUDIENCE: {
            APPLICATION: 'application',
            ADMIN: 'admin',
            STOS: 'stos',
            USER: 'user',
            PARTNER: 'partner',
            ENTERPRISE: 'enterprise',
            LEVEL_ADMIN: 'level_admin',
            DEVICE: 'device',
            SERVER: 'server',
            PROCESSOR: 'processor',
            JOB: 'job',
            AUTH: 'auth',
            TOOL: 'tool',
            SCHEDULER: 'scheduler',
        },
        SECRET: {
            BOOTSTRAP_SERVER: 'jio@1234',
            UGS_SERVER: 'jio@1234'
        }
    },
    SETTING: {
        VALUE: {
            TYPE: {
                STRING: 'string',
                INT: 'int',
                FLOAT: 'float',
                BOOLEAN: 'boolean',
                JSON: 'json',
                STRING_CONSTANT: 'string_constant',
                LIST_OF_STRING: 'list_of_string',
                LIST_OF_JSON: 'list_of_json'
            }
        },
        PROPERTY: {
            AUTO_INSERT: 'autoInsert',
            PHOTO_URL: 'photoUrl'
        },
        PUBLIC_KEYS: {
            PUB_KEY1: 'PUB_KEY1',
            PUB_KEY2: 'PUB_KEY2',
            PUB_KEY3: 'PUB_KEY3',
            PUB_KEY4: 'PUB_KEY4',
            PUB_KEY5: 'PUB_KEY5'
        },
        ENCRYPTION: {
            SALT: 'salt',
            KEYLEN: 32,
            HEX: 'hex',
            UTF8: 'utf8'
        }
    },
    HTTP: {
        STATUS: {
            OK: {
                CODE: 200,
                MESSAGE: 'SUCCESS'
            },
            PARTIAL_SUCCESS: {
                CODE: 206,
                MESSAGE: 'PARTIAL_SUCCESS'
            },
            BAD_REQUEST: {
                CODE: 400,
                MESSAGE: 'BAD_REQUEST'
            },
            NOT_AUTHENTICATED: {
                CODE: 401,
                MESSAGE: 'NOT_AUTHENTICATED'
            },
            NOT_AUTHORIZED: {
                CODE: 403,
                MESSAGE: 'NOT_AUTHORIZED'
            },
            NOT_FOUND: {
                CODE: 404,
                MESSAGE: 'NOT_FOUND'
            },
            CONFLICT: {
                CODE: 409,
                MESSAGE: 'CONFLICT'
            },
            UNPROCESSABLE: {
                CODE: 422,
                MESSAGE: 'UNPROCESSABLE'
            },
            INVALID_TOKEN: {
                CODE: 417,
                MESSAGE: 'INVALID_TOKEN'
            },
            ATTEMPT_EXCEEDED: {
                CODE: 429,
                MESSAGE: 'ATTEMPT_EXCEEDED'
            },
            LOCKED: {
                CODE: 423,
                MESSAGE: 'LOCKED'
            }
        },
        SUB_CODE: {
            PARTIAL_SUCCESS: {
                GENERIC: 1,
                EMAIL: {
                    NOT_SENT: {
                        TOKEN_GENERATED_SUCCESSFULLY: 2,
                        PASSWORD: {
                            RESET_SUCCESSFUL: 3
                        },
                        USER: {
                            REGISTRATION_SUCCESSFUL: 4
                        }
                    }
                }
            },
            BAD_REQUEST: {
                ALL_REQUIRED_FIELDS_MISSING: 1,
                MISSING_OR_INVALID: {
                    GENERIC: 12,
                    USER: {
                        ID: 2
                    },
                    EMAIL: 3,
                    TOKEN: {
                        OBJECT: 4,
                        VALUE: 5,
                        TYPE: 6
                    },
                    PASSWORD: 7,
                    NAME: 9,
                    PHONE: 10,
                    DOB: 11,
                    TYPE: 19,
                    METAPROFILE: 21
                },
                MISSING: {
                    GENERIC: 13,
                    KEYS: {
                        RETRIEVE: {
                            USER_DETAILS: 14
                        }
                    },
                    PASSWORD: 20,
                    CAPTCHA: 22
                },
                INVALID: {
                    GENERIC: 15,
                    PASSWORD_SHOULD_NOT_CONTAIN_USERNAME: 8,
                    EMAIL: 17,
                    ENTERPRISE: 262,
                    MAC: 18,
                    PHONE: 23,
                    PHONE_COUNTRY_CODE: 24
                },
                ATLEAST_ONE: {
                    EMAIL_MAC: 16
                }
            },
            NOT_AUTHENTICATED: {
                GENERIC: 1,
                TOKEN: {
                    INVALID: 2,
                    EXPIRED: 3,
                    EXPIRED_GENERATE_NEW: 4
                },
                USER: {
                    INVALID_CREDENTIALS: 5
                }
            },
            NOT_AUTHORIZED: {
                GENERIC: 1,
                ACCOUNT: {
                    LOCKED: {
                        GENERIC: 2,
                        CANNOT_GENERATE_TOKEN: 3
                    },
                    EMAIL_NOT_VERIFIED: {
                        GENERIC: 4,
                        CANNOT_GENERATE_TOKEN: 5,
                        LOGIN: 6
                    },
                    NO_REFERENCE_IMAGE: {
                        GENERIC: 8,
                    }
                },
                USER: {
                    UNABLE_TO_IDENTIFY_CURRENT_STATUS: 7
                }
            },
            NOT_FOUND: {
                GENERIC: 1,
            },
            CONFLICT: {
                GENERIC: 1,
                USER: {
                    ALREADY_REGISTERED: 2
                },
                DEVICE: {
                    ALREADY_ASSIGNED: 3,
                    ALREADY_SELF_ASSIGNED: 4
                },
                CONSENT: {
                    ALREADY_APPROVED: 5,
                    ALREADY_REJECTED: 6
                }
            },
            INVALID_TOKEN: {
                GENERIC: 1,
                EXPIRED_GENERATE_NEW: 2
            },
            ATTEMPT_EXCEEDED: {
                GENERIC: 1,
                TOKEN: {
                    RETRIES: 2
                }
            }
        },
        HEADER: {
            CONTENT_TYPE: {
                KEY: 'Content-Type',
                APPLICATION: {
                    JSON: 'application/json'
                }
            },
            AUTHORIZATION: {
                KEY: 'Authorization',
                TYPE: {
                    BEARER: 'Bearer '
                }
            }
        }
    },
    REPORT_TYPES: {
        BIS_REPORT_RRL: "bis_report_rrl",
        STORE_REPORT_RRL: "store_report_rrl",
        MIS_TOU_REPORT_RRL: "mis_tou_report_rrl"
    },
    ACTION: {
        CREATE: 'create',
        READ: 'read',
        UPDATE: 'update',
        DELETE: 'delete',
        RESTART: 'restart'
    },
    JOB: {
        STATUS: {
            CREATED: 'created',
            READY_FOR_EXECUTION: 'ready_for_execution',
            IN_PROGRESS: 'inprogress',
            CANCELED: 'canceled',
            COMPLETED: 'completed',
            PARTIAL_SUCCESS: 'partial_success',
            ERROR: 'error'
        },
        FREQUENCY: {
            ONCE: 'once'
        },
        TYPE: {
            ALERT: 'alert',
            ADD_DAT_TO_DEVICE: 'add_dat_to_device',
            ASSIGN_ASSETTYPE_TO_DEVICE: 'assign_assettype_to_device',
            SITE_INVENTORY_SETTINGS: 'site_inventory_settings',
            ADD_DAT_TO_OTHER_DAT_USER: 'add_dat_to_other_dat_user',
            ASSIGN_DAT_TO_DEVICE: 'assign_dat_to_device',
            ASSOCIATE_USER_AND_PERSON_TRACKER_DEVICE: 'associate_user_and_person_tracker_device',
            ASSOCIATE_USER_AND_STUDENT_TRACKER_DEVICE: 'associate_user_and_student_tracker_device',
            ASSOCIATE_USER_AND_VEHICLE_TRACKER_DEVICE: 'associate_user_and_vehicle_tracker_device',
            ASSOCIATE_USER_STUDENT_REFERENCE_IMAGE: 'associate_user_student_reference_image',
            CONTACT_TRACING: 'contact_tracing',
            DELETE_DAT: 'delete_dat',
            KPA_QUERY_REPORT_DOWNLOAD: 'kpa_query_report_download',
            TOWER_DATA_INGESTION: 'tower_data_ingestion',
            DELETE_DEVICE: 'delete_device',
            OFFLINE_METER_DATA_INGESTION: 'offline_meter_data_ingestion',
            OFFLINE_INVERTER_DATA_INGESTION: 'offline_inverter_data_ingestion',
            OFFLINE_DA_DAILY_SUMMARY: 'offline_da_daily_summary',
            OFFLINE_EVENT_SUMMARY: 'offline_event_summary',
            OFFLINE_CUSTOMER_BILLING_DATA_INGESTION: 'offline_customer_billing_data_ingestion',
            OFFLINE_CUCULUS_METER_DATA_INGESTION: 'offline_cuculus_meter_data_ingestion',
            OFFLINE_CUSTOMER_DATA_INGESTION: 'offline_customer_data_ingestion',
            OFFLINE_H2FC_DATA_INGESTION: 'offline_h2fc_data_ingestion',
            OFFLINE_DATA_INGESTION: 'offline_data_ingestion',
            OFFLINE_DISAGGREGATION_METER_DATA_INGESTION: 'offline_disaggregation_meter_data_ingestion',
            SYNC_HISTORICAL_HES_METER_READINGS: 'sync_historical_hes_meter_readings',
            DELETE_ENTITY: 'delete_entity',
            DELETE_ENTITY_SCHEDULER: 'delete_entity_scheduler',
            UPDATE_ENTITY: 'update_entity',
            DEVICE_REPORT: 'device_report',
            DEVICE_USAGE_REPORT: 'device_usage_report',
            DEVICE_USAGE_REPORT_BY_DAT: 'device_usage_report_by_dat',
            EDIT_DAT: 'edit_dat',
            GENERATE_RRL_STATS: 'generate_rrl_stats',
            MOVE_DAT_OF_DEVICE: 'move_dat_of_device',
            REMOVE_DAT_FROM_DEVICE: 'remove_dat_from_device',
            RIGHT_TO_DELETE: 'right_to_delete',
            RIGHT_TO_KNOW: 'right_to_know',
            TRIGGER_DEVICE_CMD: 'trigger_device_cmd',
            SCHEDULER_TASKS: 'scheduler_tasks',
            DOWNLOAD: 'download',
            REPORT: 'report',
            BUDGET_SETTINGS: 'budget_settings',
            GENERATE_TOWER_STATS: 'generate_tower_stats',
            MDG_V1_ATTACH: 'mdg_v1_attach',
            MDG_V1_DETACH: 'mdg_v1_detach',
            MDG_TRANSACTION: 'mdg_transaction',
        }
    },
    USER: {
        ROLE: {
            ADMIN: 'admin',
            POWER_USER: 'poweruser',
            MANAGER: 'manager',
            MONITOR: 'monitor'
        },
        ROLE_DESC: {
            ADMIN: 'Default Admin Role',
            POWER_USER: 'Default Power User Role',
            MANAGER: 'Default Manager Role',
            MONITOR: 'Default Monitor Role'
        },
        LEVEL: {
            ADMIN: 0,
            POWER_USER: 1,
            MANAGER: 2,
            MONITOR: 3
        },
        TYPE: {
            SUPERVISOR: 'supervisor',
            DEVICE: 'device',
            SERVER: 'server',
            STUDENT: 'student',
            USER: 'user'
        },
        STATUS: {
            ACTIVE: 'active',
            EMAIL_NOT_VERIFIED: 'email_not_verified',
            PHONE_NOT_VERIFIED: 'phone_not_verified',
            INSTOCK: 'instock',
            LOCKED: 'locked',
            MARKED_FOR_DELETION: 'marked_for_deletion',
            NO_REFERENCE_IMAGE: 'no_reference_image',
            UNLOCK: 'unlock',
            UNMARKED_FROM_DELETION: 'unmarked_from_deletion',
        },
        STATUS_COMMENT: {
            EXCEEDED_WRONG_PASSWORD_COUNT: 'exceeded_wrong_password_count',
            EXCEEDED_FORGOT_PASSWORD_TOKEN_COUNT: 'exceeded_forgot_password_token_count',
            EXCEEDED_REGISTRATION_TOKEN_COUNT: 'exceeded_registration_token_count',
            USER_AUTO_UNLOCKED: 'user_auto_unlocked'
        },
        AUTH: {
            TYPE: {
                PASSWORD: 'password',
                FR: 'fr'
            },
            KEY: {
                EMAIL: 'email',
                DEVICE_ID: 'device_id',
                PHONE: 'phone',
            }
        }
    },
    TOKEN: {
        TYPE: {
            UPDATE_EMAIL: 'update_email',
            UPDATE_PHONE: 'update_phone',
            AUTH: 'auth',
            INVITE: 'invite',
            RECOVERY: 'recovery',
            REGISTRATION: 'registration',
            RESET_PASSWORD: 'reset_password',
        },
        CHAR: {
            TYPE: {
                NUMERIC: 'numeric',
                ALPHABETS: 'alphabets',
                ALPHA_NUMERIC: 'alpha_numeric'
            }
        }
    },
    EVENT: {
        SOS: 'sos',
        SAFEZONE_ENTRY: 'safezone_entry',
        SAFEZONE_EXIT: 'safezone_exit',
        GEOFENCE_ENTRY: 'geofence_entry',
        GEOFENCE_EXIT: 'geofence_exit',
        DEVICE_GEOFENCE: 'device_geofence',
        GEOFENCE_THRESHOLD_BREACH: 'geofence_threshold_breach',
        BATTERY_STATUS: 'battery_status',
        BATTERY_ALERT: 'battery_alert',
        TAMPER_ALERT: 'tamper_alert',
        BATTERY_CONNECT: 'battery_connect',
        BATTERY_DISCONNECT: 'battery_disconnect',
        THRESHOLD_BREACH: 'threshold_breach',
        MOVEMENT_ALERT: 'movement_alert',
        INCIDENT: 'incident',
        OVER_SPEED: 'over_speed',
        OVER_STOP: 'over_stop',
        LOCATION: 'location',
        ASSET_DETAIL_UPDATED: 'asset_details_updated',
        REVERSE_CMD_SENT: 'reverse_cmd_sent',
        BMS_LOCATION: "bms_location",
        WEARING: 'wearing',
        NOT_WEARING: 'not_wearing',
        CLASS_MODE: 'class_mode',
        STATUS: 'status',
        ROUTE_ENTRY: 'route_entry',
        ROUTE_EXIT: 'route_exit',
        ROUTE_START: 'route_start',
        ROUTE_END: 'route_end',
        ROUTE_RE_ENTRY: 'route_re_entry',
        ROUTE_DEVIATION: 'route_deviation',
        ROUTE_CHECKPOINT: 'route_checkpoint',
        SWAP_INFO: 'swap-info',
        CHARGER_PERIODIC_DATA: 'charger-periodic-data',
        RIDER_INFO:'rider-info',
        GEOFENCE_BREACH: "geofence_breach",
        GEOFENCE_SPEED_VIOLATION: "geofence_speed_violation",
        HARSH_BRAKING: "harsh_braking",
        OVERSPEEDING: "overspeeding",
        RAPID_ACCELERATION: "rapid_acceleration",
        SHARP_TURN: "sharp_turn",
        TRANSACTION_STATUS:{
            COMPLETED:"COMPLETED"
        },
        ATTENDANCE: {
            ON: "attendance_on",
            OFF: "attendance_off"
        },
        LID: {
            OPEN: "lid_open",
            CLOSE: "lid_close"
        },
        FR_REGISTRATION: {
            SUCCESS: "fr_registration_success",
            FAILURE: "fr_registration_failure"
        },
        FR_CHECK_IN: {
            SUCCESS: "fr_check_in_success",
            FAILURE: "fr_check_in_failure",
            MISSED: "fr_check_in_missed"
        },
        V2: {
            SOS: 'sosv2',
            SAFEZONE_ENTRY: 'sfz_ent',
            SAFEZONE_EXIT: 'sfz_ext',
            BATTERY_STATUS: 'ba_sts',
            BATTERY_ALERT: 'ba_alr',
            LOCATION: 'loc',
            WEARING: 'wr',
            NOT_WEARING: 'n_wr',
            CLASS_MODE: 'cls_md',
            STATUS: 'sts',
            LIST: ['sosv2', 'sfz_ent', 'sfz_ext', 'ba_sts', 'ba_alr', 'wr', 'n_wr', 'cls_md', 'loc', 'sts']
        },
        FCM: {
            REGISTER: 'fcm_register',
            UNREGISTER: 'fcm_unregister'
        },
        ELECTRICITY_METERING: {
            DATA: "electricity_metering_data",
            STATUS: "electricity_metering_status"
        },
        PERIODIC_METERING: {
            DATA: "periodic_metering_data"
        },
        ASSET_FAULT_STATUS: "asset_fault_status",
        GAS_METERING_DATA: "gas_metering_data",
        WATER_METERING_DATA: "water_metering_data",
        NO_WATER_FLOW: "no_water_flow",
        WATER_REVERSE_FLOW: "water_reverse_flow",
        WATER_METER_TAMPER: "water_meter_tamper",
        WATER_LOW_BATTERY: "water_low_battery",
        // WATER_LEAKAGE: "water_leakage",
        NO_GAS_FLOW: "no_gas_flow",
        GAS_REVERSE_FLOW: "gas_reverse_flow",
        GAS_METER_TAMPER: "gas_meter_tamper",
        GAS_LOW_BATTERY: "gas_low_battery",
        // GAS_LEAKAGE: "gas_leakage",
        A_CONFLICT_OCCURRED_DURING_THE_DELIVERY_OF_A_CONSUMPTION_VALUE: "a_conflict_occurred_during_the_delivery_of_a_consumption_value",
        A_DUPLICATE_WAS_DELIVERED_WHEN_THE_CONSUMPTION_VALUES_WERE_SUBMITTED: "a_duplicate_was_delivered_when_the_consumption_values_were_submitted",
        FIRMWARE_ACTIVATED: "firmware_activated",
        STRONG_DC_FIELD_DETECTED: "strong_dc_field_detected",
        NO_STRONG_DC_FIELD_ANYMORE: "no_strong_dc_field_anymore",
        METER_COVER_REMOVED: "meter_cover_removed",
        LIMITER_THRESHOLD_CHANGED: "limiter_threshold_changed",
        MISSING_NEUTRAL: "missing_neutral",
        POWER_RESUMED: "power_resumed",
        TOTAL_POWER_FAILURE: "total_power_failure",
        PHASE_1_REVERSED: "phase_1_reversed",
        PHASE_1_REVERSED_DISAPPEARED: "phase_1_reversed_disappeared",
        DEVICE_DISCONNECTOR_HAS_BEEN_CONNECTED: "device_disconnector_has_been_connected",
        DEVICE_DISCONNECTOR_HAS_BEEN_DISCONNECTED: "device_disconnector_has_been_disconnected",
        EMETER_FIRMWARE_VERSION_UNDER_LEGAL_CONTROL: "emeter_firmware_version_under_legal_control",
        NEUTRAL_LOSS_END: "neutral_loss_end",
        MAINS_FAILURE: "mains_failure",
        DBEM_DATA: "dbem_data",
        DEVICE_DISCONNECTOR_IS_CONNECTED: "device_disconnector_is_connected",
        DEVICE_DISCONNECTOR_IS_DISCONNECTED: "device_disconnector_is_disconnected",
        DEVICE_DISCONNECTOR_IS_READY_FOR_RECONNECT: "device_disconnector_is_ready_for_reconnect",
        UNABLE_TO_RETRIEVE_DATA_2S: "unable_to_retrieve_data_2s",
        EMETER_FIRMWARE_VERSION: "emeter_firmware_version",
        UNDERVOLTAGE: "undervoltage",
        OVERVOLTAGE: "overvoltage",
        CURRENT_UNBALANCE: "current_unbalance",
        CURRENT_UNBALANCE_DISAPPEARED: "current_unbalance_disappeared",
        OVERVOLTAGE_DISAPPEARED: "overvoltage_disappeared",
        UNDERVOLTAGE_DISAPPEARED: "undervoltage_disappeared",
        CURRENT_BYPASS: "current_bypass",
        CURRENT_BYPASS_DISAPPEARED: "current_bypass_disappeared",
        REAL_TIME_CLOCK_DATE_AND_TIME: "real_time_clock_date_and_time",
        DEMAND_INTEGRATION_PERIOD: "demand_integration_period",
        PROFILE_CAPTURE_PERIOD: "profile_capture_period",
        SINGLEACTION_SCHEDULE_FOR_BILLING_DATES: "singleaction_schedule_for_billing_dates",
        ACTIVITY_CALENDAR_FOR_TIME_ZONES_ETC: "activity_calendar_for_time_zones_etc",
        NEUTRAL_DISTURBANCE: "neutral_disturbance",
        NEUTRAL_DISTURBANCE_DISAPPEARED: "neutral_disturbance_disappeared",
        EARTH_LOAD_OCCURENCE: "earth_load_occurence",
        EARTH_LOAD_RESTORATION: "earth_load_restoration",
        LLS_SECRET_MR_CHANGE: "lls_secret_mr_change",
        HLS_KEY_US_CHANGE: "hls_key_us_change",
        ESWF_CHANGE: "eswf_change",
        MD_RESET: "md_reset",
        PLUG_IN_COMMUNICATION_MODULE_REMOVAL_OCCURENCE: "plug_in_communication_module_removal_occurence",
        PLUG_IN_COMMUNICATION_MODULE_REMOVAL_RESTORATION: "plug_in_communication_module_removal_restoration",
        CONFIGURATION_CHANGE_TO_POSTPAID_MODE: "configuration_change_to_postpaid_mode",
        CONFIGURATION_CHANGE_TO_PREPAID_MODE: "configuration_change_to_prepaid_mode",
        CONFIGURATION_CHANGE_TO_FORWARDED_ONLY_MODE: "configuration_change_to_forwarded_only_mode",
        CONFIGURATION_CHANGE_TO_IMPORT_AND_EXPORT_MODE: "configuration_change_to_import_and_export_mode",
        OVERLOAD_OCCURENCE: "overload_occurence",
        OVERLOAD_RESTORATION: "overload_restoration",
        ENABLED_LOAD_LIMIT_FUNCTION: "enabled_load_limit_function",
        DISABLED_LOAD_LIMIT_FUNCTION: "disabled_load_limit_function",
        METER_LOAD_DIS_CONNECTED: "meter_load_dis_connected",
        INCREMENT_IN_BILLING_COUNTER: "increment_in_billing_counter",
        DEVICE_ONLINE: "device_online",
        HEALTH_PACKET: "health_packet",
        C2D_PAGE_REQUEST: "c2d_page_request",
        COMMAND_RESPONSE: "acknowledgement",
        INSIGHTS_PACKET: "insights_packet",
        TRANSPARENT_RESPONSE: "transparent_response",
        ANALOG_SENSOR_FAULT_STATUS: "analog_sensor_fault_status",
        DLMS_DECODING: "Dlms Event",
        DEVICE_BATTERY_STATUS_CHANGE: "device_battery_status_change",
        SERIAL_COMMUNICATION_FAULT: "serial_communication_fault",
        PEAK_LOAD_ALERT: "peak_load_alert",
        HIGH_ENERGY_ALERT: 'high_energy_alert',
        OVER_BUDGET_ALERT: 'over_budget_alert',
        HIGH_BILL_ALERT: 'high_bill_alert',
        STARTUP_EVENT: "startup_event",
        DEVICE_POWER: {
            ON: "device_power_on",
            OFF: "device_power_off"
        },
        COMMAND_ACKNOWLEDGEMENT: "command_acknowledgement",
        SMARTPLUG_ENERGY_PACKET: "smartplug_energy_packet",
        SMARTPLUG_POWER_PACKET: "smartplug_power_packet",
        SMARTPLUG_PARAMETER_ABNORMAL_PACKET: "smartplug_parameter_abnormal",
        SMARTPLUG_HEALTH_PACKET: "smartplug_health_packet",
        SMARTPLUG_BUTTON_SWITCH_PACKET: "smartplug_button_switch_packet",
        SMARTPLUG_TEMPERATURE: "smartplug_temperature",
        BATTERY_LOW: {
            INTERNAL: {
                OCCURRED: "battery_low_internal_occurred",
                RESOLVED: "battery_low_internal_resolved"
            }
        },
        WAKEUP_EVENT_PACKET: "wakeup_event_packet",
        ASSET_LIVE_STATUS: "asset_live_status",
        VEHICLE: {
            OVERSPEEDING: "overspeeding",
            RAPID_ACCELERATION: "rapid_acceleration",
            POWER_DISCONNECT: 'power_disconnect',
            IGNITION_ALERT: 'ignition_alert',
            STA_BREACH: 'sta_breach',
            ROUTE_DEVIATION: 'route_deviation',
            DRIVER_FATIGUE:'driver_fatigue',
            COLLISION_WARNING:'collision_warning',
            EV_BATTERY_SOC_LOW:'ev_battery_soc_low',
            EV_IGNITION_STATUS:'ev_ignition_status',
            TOWALERT:'tow_alert',
            GEOFENCEBREACH: "geofence_breach",
            SHARP_TURN:'sharp_turn',
            HARSH_BRAKING: "harsh_braking",
            EV_BATTERY_SWAP_ALERT:'ev_battery_swap_alert',
            CONTINUOUS_DRIVING:'continuous_driving',
            NO_GO_ZONE:'no_go_zone',
            ACCIDENT_PRONE_ZONE:'accident_prone_zone',
            PANIC_BUTTON_PRESS:'panic_button_press',
            EV_BATTERY_CHARGING_STATUS:'ev_battery_charging_status',
            SEAT_BELT_COMPLIANCE:'seat_belt_compliance',
            LOW_BATTERY:'low_battery',
            TRAFFIC_LIGHT_VIOLATION:'traffic_light_violation',
            DRIVER_DISTRACTION: 'driver_distraction',
            GEOFENCE_SPEED_VIOLATION: "geofence_speed_violation",
        },
        BATTERY: {
            CURRENT_OUTDATED: "current_outdated",
            PDU_FAILURE: "pdu_failure",
            PDU_OVERTEMPERATURE: "pdu_overtemperature",
            PDU_LOCK: "pdu_lock",
            DATA_CORRUPTED: "data_corrupted",
            BMS_AUTHENTICATION_FAIL: "bms_authentication_fail",
            FW_CFG_INCOMPATIBLE: "fw_cfg_incompatible",
            CHARGER_AUTHENTICATION_FAIL: "charger_authentication_fail",
            OVERVOLTAGE_ERROR: "overvoltage_error",
            UNDERVOLTAGE_ERROR: "undervoltage_error",
            OVER_TEMPERATURE_ERROR: "over_temperature_error",
            UNDER_TEMPERATURE_ERROR: "under_temperature_error",
            OVERLOAD_ERROR: "overload_error",
            CURRENT_SHORT_CIRCUIT: "current_short_circuit",
            BATT_PARAMETER_TIMEOUT: "batt_parameter_timeout",
            PRECHARGE_FAILURE: "precharge_failure"
        },
        AMMONIA: {
            SENSOR_DATA: "sensor_data",
            ANALOG_SENSOR_TAMPER: "analog_sensor_tamper",
        },
        IGNITION: {
            ON: "ignition_on",
            OFF: "ignition_off",
        },
        POWER: {
            OFF: "power_off",
            ON: "power_on",
        },
        TRANSACTION: {
            START: "transaction_start",
            END: "transaction_end"
        },
        FUEL: {
            FILL: "fuel_fill",
            REMOVED: "fuel_removed",
            THEFT: "fuel_theft",
            LEVEL: {
                ABOVE_MID: "fuel_level_above_mid",
                BELOW_MID: "fuel_level_below_mid",
                LOW: "fuel_level_low",
                NORMAL: "fuel_level_normal",
                ALARM: "fuel_level_alarm"
            },
            SENSOR: {
                DISCONNECTED: "fuel_sensor_disconnected",
                RECONNECTED: "fuel_sensor_reconnected",
            },
        },
        PARAMETER: {
            ABNORMALITY: {
                STATUS_CHANGE: 'parameter_abnormality_status_change'
            }
        },
        SOLAR: {
            OFFLINE_INVERTER_DATA: 'offline_inverter_data',
        },
        INPUT_POWER_SUPPLY_STATUS: "input_power_supply_status",
        COMMUNICATION_FAILURE: "communication_failure",
        //code for h2fc 
        H2FC_SITE_ON_DG: "Site_On_Dg",
        H2FC_SITE_ON_BATTERY_GT_1HR: "Site_On_Battery_Gt_1hr",
        H2FC_SITE_ON_DG_GT_3HR: "Site_On_Dg_Gt_3hr",
        H2FC_SITE_SOC_LOW: "Site_Soc_Low",
        H2FC_BATTERY_LOW: "Battery_Low",
        H2FC_MOD1_SOC_LOW: "Mod1_Soc_Low",
        H2FC_MOD2_SOC_LOW: "Mod2_Soc_Low",
        H2FC_MOD3_SOC_LOW: "Mod3_Soc_Low",
        H2FC_MOD4_SOC_LOW: "Mod4_Soc_Low",
        H2FC_MOD5_SOC_LOW: "Mod5_Soc_Low",
        H2FC_MOD6_SOC_LOW: "Mod6_Soc_Low",
        H2FC_MOD7_SOC_LOW: "Mod7_Soc_Low",
        H2FC_MOD8_SOC_LOW: "Mod8_Soc_Low",
        H2FC_MOD9_SOC_LOW: "Mod9_Soc_Low",
        H2FC_MOD10_SOC_LOW: "Mod10_Soc_Low",
        H2FC_MOD11_SOC_LOW: "Mod11_Soc_Low",
        H2FC_MOD12_SOC_LOW: "Mod12_Soc_Low",
        H2FC_MOD13_SOC_LOW: "Mod13_Soc_Low",
        H2FC_MOD14_SOC_LOW: "Mod14_Soc_Low",
        H2FC_MOD15_SOC_LOW: "Mod15_Soc_Low",
        H2FC_LINE_VOLTAGE_A_HIGH: "Line_Voltage_A_High",
        H2FC_LINE_VOLTAGE_A_LOW: "Line_Voltage_A_Low",
        H2FC_LINE_VOLTAGE_B_HIGH: "Line_Voltage_B_High",
        H2FC_LINE_VOLTAGE_B_LOW: "Line_Voltage_B_Low",
        H2FC_LINE_VOLTAGE_C_HIGH: "Line_Voltage_C_High",
        H2FC_LINE_VOLTAGE_C_LOW: "Line_Voltage_C_Low",
        H2FC_DC_VOLTAGE_HIGH: "Dc_Voltage_High",
        H2FC_DC_VOLTAGE_LOW: "Dc_Voltage_Low",
        H2FC_DG_LOW_FUEL_LEVEL_1: "Dg_Low_Fuel_Level_1",
        H2FC_DG_FAULTY_FUEL_SENSOR_1: "Dg_Faulty_Fuel_Sensor_1",
        H2FC_FC_FUEL_LEVEL_LOW: "Fc_Fuel_Level_Low",
        H2FC_NO_SNMP_DATA_COLLECTION: "No_Snmp_Data_Collection",
        H2FC_DEVICE_NOT_REACHABLE: "Device_Not_Reachable",
        H2FC_HIGH_ICMP_PING_LOSS: "High_Icmp_Ping_Loss",
        H2FC_HIGH_ICMP_PING_RESPONSE_TIME: "High_Icmp_Ping_Response_Time",
        H2FC_DG_FAIL_TO_START: "Dg_Fail_To_Start",
        H2FC_COMM_FAIL_SMPS_TO_AMF: "Comm_Fail_Smps_To_Amf",
        H2FC_B_PHASE_FAIL: "B_Phase_Fail",
        H2FC_B_PHASE_HIGH: "B_Phase_High",
        H2FC_EB_ON_BAT_DS_CH: "Eb_On_Bat_Ds_Ch",
        H2FC_RECT_OVERLOAD: "Rect_Overload",
        H2FC_AC_PH_B_FAIL: "Ac_Ph_B_Fail",
        H2FC_RECT_4AC_FAIL: "Rect_4Ac_Fail",

        //CODE FOR JPL ALERT
        JPL_DG_LOW_FUEL_LEVEL: "Jpl_Dg_Low_Fuel_Level",
        JPL_BATT_MOD_2_ISOLATED: "Jpl_Batt_Mod_2_Isolated",
        JPL_COMM_FAIL_BATT_MOD_3: "Jpl_Comm_Fail_Batt_Mod_3",
        JPL_LOAD_ON_BATT: "Jpl_Load_On_Batt",
        JPL_TEMP_1_HIGH: "Jpl_Temp_1_High",
        JPL_CELL_UNDER_VOLT_PROT_MOD_2: "Jpl_Cell_Under_Volt_Prot_Mod_2",
        JPL_CELL_DIS_CH_OVER_TEMP_PROT_MOD_2: "Jpl_Cell_Dis_Ch_Over_Temp_Prot_Mod_2",
        JPL_MOSFET_OVER_TEMP: "Jpl_Mosfet_Over_Temp",
        JPL_CELL_OVER_TEMP_1: "Jpl_Cell_Over_Temp_1",
        JPL_BATT_OVER_CURR_PROT_MOD_3: "Jpl_Batt_Over_Curr_Prot_Mod_3",
        JPL_LOAD_MCB_3_TRIP: "Jpl_Load_Mcb_3_Trip",

        BATT_VOLTAGE_PRO_MOD: "batt_voltage_pro_mod",
        ASSET_DETAIL_UPDATED: "asset_details_updated",
        REVERSE_CMD_SENT: "reverse_command_sent",
        H2C_EVENT_NAME: "tower_event",
        H2C_VEHICLE_EVENT: "vehicle_event",
        B_BIN: 'b_bin',
        B_BMS: 'b_bms',
        BMS_IOA: 'bms_ioa',
        BMS_ALARM: 'bms_alarm',
        BMS_FAULT: 'bms_fault',
        BMS_CONFIG_IOA: 'bms_config_ioa',
        BMS_BOOT: 'bms_boot',
        BMS_LOCATION: "bms_location",
        BMS_KPIS_DASHBOARD_INFO: "kpi_dashboard_info",
        BMS_ACTIVITY_LOGS: "bms_activity_logs",
        BMS_BATTERY_GENERIC_INFO: "bms_generic_info",
        BMS_BATTERY_MODEL_INFO: "bms_model_info",
        BMS_BATTERY_CHARGING_INFO: "bms_charging_info",
        BMS_BATTERY_VOLTAGE: "bms_battery_voltage",
        BMS_BATTERY_TEMPERATURE: "bms_battery_temperature",
        BMS_BOARD_TEMPERATURE: "bms_board_temperature",
        BMS_BATTERY_ERROR: "bms_battery_error",
        BMS_BATTERY_WARNING: "bms_battery_warning",
        BMS_CONFIGURATION: "bms_configuration",
        BMS_REVERSE_PATH: "bms_reverse_path",
        BMS_LOCATION_DATA: "bms_location_data",
        BMS_MODULE_INFO: "bms_module_info",
        BMS: {
            EVENT: 'battery_health_stat',
            ALERT: 'alert',
            ELEKTRONIKA_EVENT: 'battery_health_stat',
            ELEKTRONIKA_ALERT: 'alert'
        },
        CODE: {
            SMARTPLUG_PACKETS: {
                STARTUP: "580",
                SMARTPLUG_POWER_PACKET: "581",
                SMARTPLUG_ENERGY_PACKET: "582",
                HEALTH_PACKET: "583",
                BUTTON_SWITCH_PACKET: "584",
                PARAMETER_ABNORMAL: "585",
                TEMPERATURE: "586"
            },
            SWAP_INFO: "680",
            CHARGER_PERIODIC_DATA: "640",
            RIDER_INFO:"681",
            DLMS_DECODING: "331",
            D2C_MESSAGE: "351",
            D2C_ALERT_PUSH: "352",
            COMMAND_RESPONSE: "412",
            TRANSPARENT_RESPONSE: "413",
            INCIDENT: "501",
            MOVEMENT: "221",
            TAMPER: "2",
            BATTERY_CONNECT: "35",
            BATTERY_DISCONNECT: "34",
            SOS: "5",
            SAFEZONE_ENTRY: "3",
            SAFEZONE_EXIT: "4",
            GEOFENCE_ENTRY: "3",
            GEOFENCE_EXIT: "4",
            LOCATION: "0",

            REVERSE: {
                DEVICE_CONFIGURATION: "60",
                INCIDENT: "502",
                C2D: "550"
            },
            ATTENDANCE: {
                ON: "208",
                OFF: "209"
            },
            LID: {
                OPEN: "208", // Differentiator is FNM - lid
                CLOSE: "209" // Differentiator is FNM - lid
            },
            FCM: {
                REGISTER: "208",
                UNREGISTER: "209"
            },
            FR_REGISTRATION: {
                SUCCESS: "208", // Differentiator is FNM - frr
                FAILURE: "209" // Differentiator is FNM - frr
            },
            FR_CHECK_IN: {
                SUCCESS: "208", // Differentiator is FNM - frv
                FAILURE: "209", // Differentiator is FNM - frv
                MISSED: "508"
            },
            DEVICE_GEOFENCE: "521",
            ELECTRICITY_METERING: {
                DATA: "256",
                STATUS: "237"
            },
            ELECTRICITY_METERING_V1: {
                DATA: "300", // Periodic data push
                STATUS: "237"
            },
            BMS: {
                ALERT: "401",
                EVENT: "400",
                ELEKTRONIKA_EVENT: "451",
                ELEKTRONIKA_ALERT: "452",
                B_BIN: "470",
                B_BMS: "471",
                IOA: "472",
                ALARM: "473",
                FAULT: "474",
                CONFIG_IOA: "475",
                BOOT: "476",
                LOCATION: "477"
            },
            ASSET_FAULT_STATUS: "263",
            WATER_GAS_METERING: "332",
            WATER_GAS_METERING_V1: "335",
            A_CONFLICT_OCCURRED_DURING_THE_DELIVERY_OF_A_CONSUMPTION_VALUE: "308906",
            A_DUPLICATE_WAS_DELIVERED_WHEN_THE_CONSUMPTION_VALUES_WERE_SUBMITTED: "308907",
            FIRMWARE_ACTIVATED: "402018",
            STRONG_DC_FIELD_DETECTED: "402042",
            NO_STRONG_DC_FIELD_ANYMORE: "402043",
            METER_COVER_REMOVED: "402044",
            LIMITER_THRESHOLD_CHANGED: "402067",
            MISSING_NEUTRAL: "402245",
            POWER_RESUMED: "402246",
            TOTAL_POWER_FAILURE: "402247",
            PHASE_1_REVERSED: "402646",
            PHASE_1_REVERSED_DISAPPEARED: "402649",
            DEVICE_DISCONNECTOR_HAS_BEEN_CONNECTED: "402674",
            DEVICE_DISCONNECTOR_HAS_BEEN_DISCONNECTED: "402675",
            EMETER_FIRMWARE_VERSION_UNDER_LEGAL_CONTROL: "402676",
            NEUTRAL_LOSS_END: "402749",
            MAINS_FAILURE: "409011",
            DEVICE_DISCONNECTOR_IS_CONNECTED: "500500",
            DEVICE_DISCONNECTOR_IS_DISCONNECTED: "500501",
            DEVICE_DISCONNECTOR_IS_READY_FOR_RECONNECT: "500503",
            UNABLE_TO_RETRIEVE_DATA_2S: "501515",
            EMETER_FIRMWARE_VERSION: "501543",
            UNDERVOLTAGE: "501547",
            OVERVOLTAGE: "501548",
            CURRENT_UNBALANCE: "501587",
            CURRENT_UNBALANCE_DISAPPEARED: "501588",
            OVERVOLTAGE_DISAPPEARED: "501589",
            UNDERVOLTAGE_DISAPPEARED: "501590",
            CURRENT_BYPASS: "501595",
            CURRENT_BYPASS_DISAPPEARED: "501596",
            REAL_TIME_CLOCK_DATE_AND_TIME: "501598",
            DEMAND_INTEGRATION_PERIOD: "501599",
            PROFILE_CAPTURE_PERIOD: "501600",
            SINGLEACTION_SCHEDULE_FOR_BILLING_DATES: "501601",
            ACTIVITY_CALENDAR_FOR_TIME_ZONES_ETC: "501602",
            NEUTRAL_DISTURBANCE: "501603",
            NEUTRAL_DISTURBANCE_DISAPPEARED: "501604",
            EARTH_LOAD_OCCURENCE: "501710",
            EARTH_LOAD_RESTORATION: "501711",
            LLS_SECRET_MR_CHANGE: "501712",
            HLS_KEY_US_CHANGE: "501713",
            ESWF_CHANGE: "501716",
            MD_RESET: "501717",
            PLUG_IN_COMMUNICATION_MODULE_REMOVAL_OCCURENCE: "501718",
            PLUG_IN_COMMUNICATION_MODULE_REMOVAL_RESTORATION: "501719",
            CONFIGURATION_CHANGE_TO_POSTPAID_MODE: "501720",
            CONFIGURATION_CHANGE_TO_PREPAID_MODE: "501721",
            CONFIGURATION_CHANGE_TO_FORWARDED_ONLY_MODE: "501722",
            CONFIGURATION_CHANGE_TO_IMPORT_AND_EXPORT_MODE: "501723",
            OVERLOAD_OCCURENCE: "501724",
            OVERLOAD_RESTORATION: "501725",
            ENABLED_LOAD_LIMIT_FUNCTION: "501726",
            DISABLED_LOAD_LIMIT_FUNCTION: "501727",
            METER_LOAD_DIS_CONNECTED: "501740",
            INCREMENT_IN_BILLING_COUNTER: "501741",
            DEVICE_ONLINE: "800000",
            SERIAL_COMMUNICATION_FAULT: "320", // Serial communication fault status
            PEAK_LOAD_ALERT: "541",
            HIGH_ENERGY_ALERT: "542",
            OVER_BUDGET_ALERT: "544",
            HIGH_BILL_ALERT: "543",
            HEALTH_PACKET: "202",
            C2D_PAGE_REQUEST: "201",
            HEALTH_PACKET_V1: "317",
            INSIGHTS_PACKET: "560",
            ANALOG_SENSOR_FAULT_STATUS: "314",
            DEVICE_BATTERY_STATUS_CHANGE: "309",
            STARTUP_EVENT: "204",
            STARTUP_EVENT_V1: "318",
            // bms packet event start
            BMS_BATTERY_GENERIC_INFO: "600",
            BMS_BATTERY_MODEL_INFO: "601",
            BMS_BATTERY_CHARGING_INFO: "602",
            BMS_BATTERY_VOLTAGE: "603",
            BMS_BATTERY_TEMPERATURE: "604",
            BMS_BOARD_TEMPERATURE: "605",
            BMS_BATTERY_ERROR: "606",
            BMS_BATTERY_WARNING: "607",
            BMS_CONFIGURATION: "608",
            BMS_REVERSE_PATH: "609",
            BMS_LOCATION_DATA: "610",
            BMS_MODULE_INFO: "611",
            BMS_KPIS_DASHBOARD_INFO: "631",
            BMS_ACTIVITY_LOGS: "632",
            // bms packet event end
            DEVICE_POWER: {
                ON: "35",
                OFF: "34"
            },
            BATTERY_LOW: {
                INTERNAL: {
                    OCCURRED: "31",
                    RESOLVED: "220"
                }
            },
            WAKEUP_EVENT_PACKET: "250",
            ASSET_LIVE_STATUS: "509",
            IGNITION: {
                ON: 16,
                OFF: 33,
            },
            COMMAND_ACKNOWLEDGEMENT: "330",
            POWER: {
                OFF: "225",
                ON: "224",
                DG_V1: "310", // For Asset DG Power ON and OFF based on status
                MDG_V1: "410"
            },
            VEHICLE: {
                OVERSPEEDING: "800",
                RAPID_ACCELERATION: "801",
                POWER_DISCONNECT: '802',
                IGNITION_ALERT: '803',
                STA_BREACH: '804',
                ROUTE_DEVIATION: '805',
                DRIVER_FATIGUE:'806',
                COLLISION_WARNING:'807',
                EV_BATTERY_SOC_LOW:'808',
                EV_IGNITION_STATUS:'809',
                TOWALERT:'810',
                GEOFENCEBREACH: "811",
                SHARP_TURN:'812',
                HARSH_BRAKING: "813",
                EV_BATTERY_SWAP_ALERT:'814',
                CONTINUOUS_DRIVING:'815',
                NO_GO_ZONE:'816',
                ACCIDENT_PRONE_ZONE:'817',
                PANIC_BUTTON_PRESS:'818',
                EV_BATTERY_CHARGING_STATUS:'819',
                SEAT_BELT_COMPLIANCE:'820',
                LOW_BATTERY:'821',
                TRAFFIC_LIGHT_VIOLATION:'822',
                DRIVER_DISTRACTION: '823',
                GEOFENCE_SPEED_VIOLATION: "824",
            },
            BATTERY: {
                CURRENT_OUTDATED: "650",
                PDU_FAILURE: "651",
                PDU_OVERTEMPERATURE: "652",
                PDU_LOCK: "653",
                DATA_CORRUPTED: "654",
                BMS_AUTHENTICATION_FAIL: "655",
                FW_CFG_INCOMPATIBLE: "656",
                CHARGER_AUTHENTICATION_FAIL: "657",
                OVERVOLTAGE_ERROR: "658",
                UNDERVOLTAGE_ERROR: "659",
                OVER_TEMPERATURE_ERROR: "660",
                UNDER_TEMPERATURE_ERROR: "661",
                OVERLOAD_ERROR: "662",
                CURRENT_SHORT_CIRCUIT: "663",
                BATT_PARAMETER_TIMEOUT: "664",
                PRECHARGE_FAILURE: "665"
            },
            FUEL: {
                THEFT: "206",
                FILL: "10080",
                FILL_V1: "303",
                REMOVED: "304",
                LEVEL: {
                    ABOVE_MID: "10604",
                    BELOW_MID: "10603",
                    LOW: "10605",
                    NORMAL: "10606",
                    ALARM: "321"
                },
                SENSOR: {
                    DISCONNECTED: "236",
                    RECONNECTED: "270",
                },
            },
            SOLAR: {
                OFFLINE_INVERTER_DATA: '529',
            },
            H2FC: {
                OFFLINE_DATA: '390',
                OFFLINE_EVENT_DATA: '392',
                PARAMETER_DATA: '490',
                JHS_VEHICLE_DATA: '391'
            },
            PARAMETER: {
                ABNORMALITY: {
                    STATUS_CHANGE: "328"
                }
            },
            INPUT_POWER_SUPPLY_STATUS: "261",
            INPUT_POWER_SUPPLY_STATUS_V1: "307", // Device input power supply status change
            COMMUNICATION_FAILURE: "510",
            ASSET_DETAIL_UPDATED: "511",
            REVERSE_CMD_SENT: "512",
            //CODE FOR SITE ALERT
            H2FC_BATTERY_LOW: "701",
            H2FC_SITE_ON_DG: "703",
            H2FC_SITE_ON_BATTERY_GT_1HR: "708",
            H2FC_SITE_ON_DG_GT_3HR: "709",
            H2FC_SITE_SOC_LOW: "710",
            //CODE FOR BATTERY ALERT
            H2FC_MOD1_SOC_LOW: "721",
            H2FC_MOD2_SOC_LOW: "722",
            H2FC_MOD3_SOC_LOW: "723",
            H2FC_MOD4_SOC_LOW: "724",
            H2FC_MOD5_SOC_LOW: "725",
            H2FC_MOD6_SOC_LOW: "726",
            H2FC_MOD7_SOC_LOW: "727",
            H2FC_MOD8_SOC_LOW: "728",
            H2FC_MOD9_SOC_LOW: "729",
            H2FC_MOD10_SOC_LOW: "730",
            H2FC_MOD11_SOC_LOW: "731",
            H2FC_MOD12_SOC_LOW: "732",
            H2FC_MOD13_SOC_LOW: "733",
            H2FC_MOD14_SOC_LOW: "734",
            H2FC_MOD15_SOC_LOW: "735",
            //CODE FOR EB ALERT
            H2FC_LINE_VOLTAGE_A_HIGH: "741",
            H2FC_LINE_VOLTAGE_A_LOW: "742",
            H2FC_LINE_VOLTAGE_B_HIGH: "743",
            H2FC_LINE_VOLTAGE_B_LOW: "744",
            H2FC_LINE_VOLTAGE_C_HIGH: "745",
            H2FC_LINE_VOLTAGE_C_LOW: "746",
            H2FC_DC_VOLTAGE_HIGH: "747",
            H2FC_DC_VOLTAGE_LOW: "748",
            //CODE FOR DG ALERT
            H2FC_DG_LOW_FUEL_LEVEL_1: "751",
            H2FC_DG_FAULTY_FUEL_SENSOR_1: "752",
            //CODE FOR FC ALERT
            H2FC_FC_FUEL_LEVEL_LOW: "761",
            //CODE FOR MISCELLANEOUS ALERT
            H2FC_NO_SNMP_DATA_COLLECTION: "781",
            H2FC_DEVICE_NOT_REACHABLE: "782",
            H2FC_HIGH_ICMP_PING_LOSS: "783",
            H2FC_HIGH_ICMP_PING_RESPONSE_TIME: "784",
            H2FC_SERVER_RESTARTED: "785",

            H2FC_DG_FAIL_TO_START: "872",
            H2FC_COMM_FAIL_SMPS_TO_AMF: "1095",
            H2FC_B_PHASE_FAIL: "313",
            H2FC_B_PHASE_HIGH: "308",
            H2FC_EB_ON_BAT_DS_CH: "791",
            H2FC_RECT_OVERLOAD: "38",
            H2FC_AC_PH_B_FAIL: "14",
            H2FC_RECT_4AC_FAIL: "93",
            BATT_VOLTAGE_PRO_MOD: "390",

            //CODE FOR JPL ALERT
            JPL_DG_LOW_FUEL_LEVEL: "1083",
            JPL_BATT_MOD_2_ISOLATED: "726",
            JPL_COMM_FAIL_BATT_MOD_3: "655",
            JPL_LOAD_ON_BATT: "240",
            JPL_TEMP_1_HIGH: "11",
            JPL_CELL_UNDER_VOLT_PROT_MOD_2: "520",
            JPL_CELL_DIS_CH_OVER_TEMP_PROT_MOD_2: "605",
            JPL_MOSFET_OVER_TEMP: "772",
            JPL_CELL_OVER_TEMP_1: "767",
            JPL_BATT_OVER_CURR_PROT_MOD_3: "507",
            JPL_LOAD_MCB_3_TRIP: "807",

            //CODE FOR AMMONIA
            AMMONIA: {
                SENSOR_DATA: "210",
                ANALOG_SENSOR_TAMPER: "266",
            }

        },
        FNM: {
            LID: "lid",
            FRR: "frr", // FR Registration
            FRV: 'frv', // FR Check In
            FCM: 'fcm'
        },
        SOURCE: {
            EV: "EV",
            GPS: "GPS",
            SIM: "SIM",
            DEVICE_GEOFENCE: "GFC",
            AL: "AL",
            HB: "HB",
            DG: "DG",
            JHS_VTOWER : "jhs_vtower"

        }
    },
    INSIGHTS: {
        MONTH_OVER_MONTH_COMPARISON: "month_over_month_comparison",
        WEEK_OVER_WEEK_COMPARISON: "week_over_week_comparison",
        ENERGY_BUCKETTING: "energy_bucketting",
        ANOMALY: "anomaly",
        WEEKLY_FORECAST: "weekly_forecast",
        MONTHLY_USAGE_PROPORTION: "monthly_usage_proportion",
        WEEKLY_USAGE_PROPORTION: "weekly_usage_proportion",
        MAXIMUM_CONSUMPTION_AT_AN_HOUR_OR_DAY_LEVEL: "maximum_consumption_at_an_hour_or_day_level",
        ENERGY_BUCKETING_AT_A_DAY_LEVEL: "energy_bucketing_at_a_day_level",
        SUB_CODE: {
            MONTH_OVER_MONTH_COMPARISON: "701",
            WEEK_OVER_WEEK_COMPARISON: "702",
            ENERGY_BUCKETTING: "703",
            ANOMALY: "704",
            WEEKLY_FORECAST: "705",
            MONTHLY_USAGE_PROPORTION: "706",
            WEEKLY_USAGE_PROPORTION: "707",
            MAXIMUM_CONSUMPTION_AT_AN_HOUR_OR_DAY_LEVEL: "708",
            ENERGY_BUCKETING_AT_A_DAY_LEVEL: "709"
        }
    },
    MESSAGE: {
        SAFEZONE_CREATED: 'safezone_created',
        SAFEZONE_UPDATED: 'safezone_updated',
        SAFEZONE_DELETED: 'safezone_deleted',
        SETTINGS: 'settings',
        SOFTWARE_UPDATE: 'sw_update',
        USER_UPDATE: 'user_update',
        TYPE: {
            TEXT: 'text',
            AUDIO: 'audio'
        },
        FORGET_DEVICE: "forget_device"
    },
    TOPIC: {
        GENERAL: 'gen',
        LOCATION: 'loc',
        UGS: 'ugs'
    },
    SUB_TOPIC: {
        SAFEZONES: 'safezones',
        SETTINGS: 'settings',
        STATUS: 'status',
        USER_UPDATE: 'user_update',
        FORGET_DEVICE: "forget_device"
    },
    SUB_TOPIC_CATEGORY: {
        SOFTWARE_UPDATE: 'swupdate'
    },
    ACK: 'ack',
    DEVICE: {
        TYPE: {
            WATCH: 'watch',
            TRACKER: 'tracker'
        },
        MODEL: {
            PEOPLE_TRACKER: 'PeopleTracker',
            PER_TRACK: 'PerTrack',
            JIO_TRACKER_V1: 'JioTrackerV1',
            WATCH: 'watch',
            JIO_PHONE: 'JioPhone',
            JIO_PHONE_1: 'jiophone',
            JPT_1740: 'JPT1740',
            JPT_1780: 'JPT1780',
            WATCH_ME_GO: 'WatchMeGo'
        },
        SETTINGS: {
            REPORTED: 'reported',
            DESIRED: 'desired'
        },
        IDENTIFIER: {
            IMEI: 'imei',
            WIFI_MAC: 'wifiMac',
            BT_MAC: 'btMac',
            SERIAL: 'serial',
            PHONE: 'phone',
            METER_ID: 'meter'
        },
    },
    FOTA: {
        STATUS: {
            RUNNING: 'running',
            DOWNLOAD: 'download',
            DOWNLOADED: 'downloaded',
            FINISHED: 'finished',
            CANCELED: 'canceled',
            CANCELLED: 'cancelled',
            ERROR: 'error'
        }
    },
    ENTITY: {
        ALL: 'all',
        APPLICATION: 'application',
        USER: 'user',
        USER_ROLE: 'user_role',
        USER_PREFERENCE: 'user_preference',
        PARTNER: 'partner',
        GROUP: 'group',
        JOB: 'job',
        SETTING: 'setting',
        DEVICE: 'device',
        DEVICE_SETTING: 'device_setting',
        DEVICE_STATUS: 'device_status',
        FILE: 'file',
        FILE_CACHE: 'file_cache',
        ACL: 'acl',
        ACL_PREFERENCE: 'acl_preference',
        ALERT_PREFERENCE: 'alert_preference',
        ENTITY_TYPE: 'entity_type',
        ACL_SETTING: 'acl_setting',
        GEOFENCE: 'geofence',
        ROUTE: 'route',
        ROUTE_CHECKPOINT: 'route_checkpoint',
        GEOFENCE_STATUS: 'geofence_status',
        ROUTE_STATUS: 'route_status',
        ACT: 'act',
        ACTIONABLE_TASKS: 'actionable_tasks',
        ASSET_TYPE: 'asset_type',
        DAT_SAFEZONE: 'entity_safezone',
        DAT_STATUS: 'entity_status',
        DEVICE_FEATURE: 'device_feature',
        DEVICE_FEATURE_SETTING: 'device_feature_setting',
        DEVICE_MODEL: 'device_model',
        DEVICE_MODEL_FEATURE: 'device_model_feature',
        DEVICE_MODEL_FEATURE_SETTING: 'device_model_feature_setting',
        DEVICE_JNOPS: 'device_jnops',
        DMAT: 'dmat',
        DMAT_FEATURE: 'dmat_feature',
        DMAT_FEATURE_SETTING: 'dmat_feature_setting',
        EVENT: 'event',
        EVENT_STAT: 'event_stat',
        EVENT_TYPE: 'event_type',
        INCIDENT: 'incident',
        INCIDENT_COMMENTS: 'incidentcomments',
        INCIDENT_SUB_TYPE: 'incident_sub_type',
        ADMIN_ROLE: 'admin_role',
        ADMIN_USER: 'admin_user',
        ENTERPRISE_USER: 'enterprise_user',
        CACHE: 'cache',
        BLACKLISTED_TOKEN: 'blacklisted_token',
        ARCHIVE: 'archive',
        MESSAGE: 'message',
        MESSAGE_FILE: 'message_file',
        COMPONENT: 'component',
        COURSE: 'course',
        CLASSROOM: 'classroom',
        COURSE_CLASSROOM: 'course_classroom',
        USER_ATTENDANCE: 'user_attendeance',
        FR_LOG: 'fr_log',
        LKMS_LOG: 'lkms_log',
        AUDIT_LOG: 'audit_log',
        SESSION_GROUP_EVENT: 'session_group_event',
        ALERT: 'alert',
        ALERT_COMMENTS: 'alert_comments',
        ALERT_STATUSES: 'alert_statuses',
        REPORT: 'report',
        API_KEY: 'apikeys',
        ENTERPRISE: 'enterprise',
        ENTERPRISE_JNOPS: 'enterprise_jnops',
        DASHBOARD_CONFIG: 'dashboard_config',
        TAGS: 'tags',
        DICTIONARY: 'dictionary',
        INVERTER: 'inverter',
        RESOURCES_INFO: 'resources_info',
        IP_COLO: 'ip_colo',
        APP_VERSION: 'app_version',
        SOLAR_STATS: 'solar-stats',
        BATTERY_STATUS: 'battery-status',
        EXICOM_STATS: 'exicom-stats',
        UNIFIED_DASHBOARD: 'unified-dashboard'
    },
    ENCODING: {
        BASE64: 'base64'
    },
    FILE: {
        MIME_TYPE: {
            APPLICATION: {
                OCTET_STREAM: 'application/octet-stream',
                OGG: 'application/ogg',
                JSON: 'application/json',
                VND_MS_EXCEL: 'application/vnd.ms-excel',
                ZIP: 'application/zip',
            },
            AUDIO: {
                WAVE: 'audio/wave',
                WAV: 'audio/wav',
                OGG: 'audio/ogg',
                MP3: 'audio/mp3',
                MP4: 'audio/mp4',
                MPEG: 'audio/mpeg',
                X_AAC: 'audio/x-aac',
                AAC: 'audio/aac',
                AMR: 'audio/amr'
            },
            IMAGE: {
                JPEG: 'image/jpeg',
                PNG: 'image/png',
                GIF: 'image/gif',
            },
            TEXT: {
                CSV: 'text/csv'
            },
            VIDEO: {
                WAVE: 'video/wave',
                WAV: 'video/wav',
                OGG: 'video/ogg',
                MP4: 'video/mp4'
            },
        },
        TYPE: {
            AUDIO: 'audio',
            CONTACT: 'contact',
            VIDEO: 'video',
            IMAGE: 'image',
            JSON: 'json'
        },
        AUDIO: {
            EXTENTIONS: ['amr']
        },
        CONTACT: {
            EXTENTIONS: ['vcf']
        },
        EXTENTION: {
            CSV: '.csv',
            PDF: '.pdf'
        },
        FIELD_NAME: {
            LOGO: 'logo',
            BACKGROUND: 'background'
        }
    },
    DEFAULT: {
        FORMAT: {
            DATE: 'YYYY-MM-DD'
        },
        PHONE: {
            COUNTRY_CODE: "91"
        },
        SOLAR_DVT: 'pg',
        SOLAR_DVM: 'delta',
        SOLAR_EVT: 'EV',
        TOWER_EVT: 'tower',
        TOWER_MDG_EVT: 'mdgtower',
        MDG: 'mdg'
    },
    SUBJECT: {
        PARTNER_REGISTRATION_SUCCESSFULL: "Partner registration successful",
        USER_REGISTRATION_SUCCESSFULL: "User registration successful",
        PASSWORD: {
            RESET: {
                SUCCESSFUL: "Password reset successful."
            },
            TOKEN: "Password reset pin"
        },
        USER_REGISTRATION_TOKEN: "User registration pin",
        USER_VERIFY_TOKEN: "User verify pin",
        SUCCESSFUL: {
            TOKEN: {
                LOGIN: 'Login Pin',
                REGISTRATION: 'Registration Pin',
                RESET_PASSWORD: 'Reset Password Pin'
            },
            PASSWORD_RESET: 'Password reset successful.',
            REGISTRATION: 'Registration successful.'
        },
        RIGHT_TO_KNOW: "Right to Know request submitted successfully."
    },
    REQUEST_TYPE: {
        IN: 'in',
        OUT: 'out'
    },
    AWS: {
        ERROR: {
            NOT_FOUND: {
                CODE: 'NotFound',
                MESSAGE: 'No S3 object exists with this key.'
            },
            FORBIDDEN: {
                CODE: 'Forbidden',
                MESSAGE: 'S3 object access denied.'
            }
        }
    },
    STORAGE: {
        LOCAL: 'local',
        AWS_S3: 'aws_s3',
        GRIDFS: {
            BUCKET_NAME: 'file_uploads'
        }
    },
    STRING: {
        TRUE: 'true',
        FALSE: 'false',
        UNKNOWN: 'UNKNOWN',
        GIN: 'GIN',
        GOUT: 'GOUT',
        FORWARD_SLASH: '/',
        PIPE: '|',
        SEPARATOR: {
            COMMA: ','
        },
        STAR: "*",
        WHITESPACE: ' ',
        EMPTY: "",
        DOT: ".",
    },
    NULL: null,
    ACL: {
        TYPE: {
            DAT: 'dat'
        },
        ACTION: {
            CREATE: 'create',
            READ: 'read',
            UPDATE: 'update',
            DELETE: 'delete'
        }
    },
    ASSET_TYPE: {
        CODE: {
            PERSON: 'person',
            STUDENT: 'student',
            CHARGER:'charger',
            VEHICLE: 'vehicle',
            SWAP_STATION:"swap_station",
            WATER: 'water',
            GAS: 'gas',
            INVERTER: 'inverter',
            MAIN: "main",
            DG: "dg",
            DGController: "dg_controller",
            HVAC: "hvac",
            HVAC_MONITORING: "hvac_monitoring",
            DGGEN: "DGGEN",
            LIGHTING: "lighting",
            POWER: "power",
            AC: "ac",
            STORAGE: "storage",
            REFRIGERATOR: "refrigerator",
            PARKING: "parking",
            BILLING_DESK: "billing_desk",
            REPORTING_DEVICE: "reporting_device",
            FC: 'fc',
            TDG: 'tdg',
            SMPS: 'smps',
            BATTERY: 'battery',
            SMART_BATTERY: 'smart_battery',
            MOBILE_BATTERY: 'mobile_battery',
            SOLAX_INVERTER: 'solax_inverter',
            GROWATT_INVERTER: 'growatt_inverter',
            SOLAR: 'solar',
            ODMBCS: 'odmbcs',
            ODMDG: 'odmdg',
            MDG: 'mdg',
            MBCS: 'mbcs'

        },
        MODE: ["economizing", "compressing", "fan_only", "heating"]
    },
    ADMIN: {
        ROLE: {
            ADMIN: 'admin',
            CUSTOMER_CARE: 'customer_care',
            DEFAULT: 'default',
            SUPERADMIN: 'superadmin',
        }
    },
    GEOFENCE: {
        TYPE: {
            CIRCULAR: 'circular',
            POLYGONAL: 'polygonal',
            ROUTE: 'route',
        },
        STATUS: {
            ACTIVE: 'active',
            DELETED: 'deleted',
            INACTIVE: 'inactive',
        },
        ACCESS_LEVEL: {
            AUTHORIZED: 1,
            RESTRICTED: 0,
            UNAUTHORIZED: 2,
        },
        STATE: {
            UNKNOWN: 'UNKNOWN',
            GIN: 'GIN',
            GOUT: 'GOUT',
        },
        THRESHOLD: {
            STATUS: {
                ACTIVE: 'active',
                INACTIVE: 'inactive',
            }
        }
    },
    ROUTE: {
        TYPE: {
            ROUTE: 'route'
        },
        STATUS: {
            ACTIVE: 'active',
            DELETED: 'deleted',
            INACTIVE: 'inactive',
        },
        STATE: {
            DEVIATION: 'deviation',
            END: 'end',
            EXIT: 'exit',
            IN: 'in',
            OUT: 'out',
            RE_ENTRY: 're_entry',
            START: 'start',
            UNKNOWN: 'unknown',
        },
        ACCESS_LEVEL: {
            AUTHORIZED: 1,
            RESTRICTED: 0,
            UNAUTHORIZED: 2
        },
        CHECKPOINT: {
            TYPE: {
                CIRCULAR: 'circular',
                POLYGONAL: 'polygonal'
            },
        }
    },
    FEATURE: {
        CODE: {
            LOCATION: 'location',
            GEOFENCE_DEVICE: 'geofence_device',
            GEOFENCE_DAT: 'geofence_dat',
            GEOFENCE_GLOBAL: 'geofence_global',
            PHONEBOOK: 'phonebook',
            MAP: 'map',
            SPEED: 'speed',
            BATTERY: 'battery',
            SIGNAL: 'signal',
            SOS: 'sos'
        }
    },
    REMOTE_TRIGGER: {
        SOS: {
            STATUS: {
                START: 'start',
                STOP: 'stop'
            }
        }
    },
    DB: {
        COLLECTION: {
            DEVICE_SETTING: {
                COLUMN: {
                    PHONEBOOKS: 'phonebooks',
                    REMOTE_TRIGGER: 'remoteTrigger',
                    SHORT: {
                        REMOTE_TRIGGER: 'rtg'
                    }
                }
            },
            EVENTS: {
                EXPIRE_TIME: 60 * 60 * 24 * 33,
            },
            EVENTS_RAW: {
                EXPIRE_TIME: 60 * 60 * 24 * 7,
            },
            EVENT_DAILY_SUMMARY: {
                EXPIRE_TIME: 60 * 60 * 24 * 365 * 2,
            },
            EVENTS_MONTHLY_SUMMARY: {
                EXPIRE_TIME: 60 * 60 * 24 * 365 * 2,
            },
        },
        BIN_SIZE: 5
    },
    STOS: {
        NOTIFICATION: {
            REQUEST: {
                HEADER: {
                    ENTITY: {
                        B2B_DOMAIN_REGISTRATION: 1,
                        B2B_DOMAIN_DEVICE_REGISTRATION: 2,
                        B2C_CUSTOMER_REGISTRATION: 3,
                        B2C_CUSTOMER_DEVICE_REGISTRATION: 4,
                        CUSTOMER_CREDENTIAL: 5
                    },
                    OPERATION: {
                        CREATE: 1,
                        READ: 2,
                        UPDATE: 3,
                        DELETE: 4
                    }
                }
            }
        }
    },
    TRIGGER: {
        DEVICE: {
            COMMAND: {
                SOS_BY_DAT: 'sos_by_dat',
                SOS_BY_GEOFENCE: 'sos_by_geofence',
                DELETE_GEOFENCE: 'delete_geofence',
                SIM_BASED_TRACKING_BY_DAT: 'sim_based_tracking_by_dat',
            }
        }
    },
    GENDER: {
        MALE: 'male',
        FEMALE: 'female',
        OTHERS: 'others'
    },
    REPORT: {
        DEVICE: {
            NO_EVENTS_BY_TIME: 'no_events_by_time'
        },
        SUB_TYPE: {
            DISTANCE_REPORT: 'distance_report',
            TRACE_REPORT: 'trace_report',
            INCIDENT_REPORT: 'incident_report',
            SAFEZONE_REPORT: 'safezone_report',
            OFFLINE_REPORT: 'offline_report',
            SOS_REPORT: 'sos_report',
            ROUTE_REPORT: 'route_report',
            ENERGY_ANALYSIS_REPORT: 'energy_analysis_report',
            ROUTE_EXIT_REPORT: 'route_exit_report',
            FR_CHECK_IN_MISSED_REPORT: 'fr_check_in_missed_report',
            ALERT_REPORT: 'alert_report',
            DISTANCE_REPORT_RRL: 'distance_report_rrl',
            TRACE_REPORT_RRL: 'trace_report_rrl',
            INCIDENT_REPORT_RRL: 'incident_report_rrl',
            SAFEZONE_REPORT_RRL: 'safezone_report_rrl',
            OFFLINE_REPORT_RRL: 'offline_report_rrl',
            SOS_REPORT_RRL: 'sos_report_rrl',
            ROUTE_REPORT_RRL: 'route_report_rrl',
            ENERGY_ANALYSIS_REPORT_RRL: 'energy_analysis_report_rrl',
            ROUTE_EXIT_REPORT_RRL: 'route_exit_report_rrl',
            FR_CHECK_IN_MISSED_REPORT_RRL: 'fr_check_in_missed_report_rrl',
            ALERT_REPORT_RRL: 'alert_report_rrl',
            DG_MONITORING_RRL: 'dg_monitoring_report_rrl',
            DG_MONITORING: 'dg_monitoring',
            BATTERY_USAGE_REPORT_BMS: 'battery_usage_report_bms'
        }
    },
    LOW_BATTERY: {
        STATE: {
            UNKNOWN: 0,
            NOTIFIED: 1
        }
    },
    OVER_SPEED: {
        STATE: {
            UNKNOWN: 0,
            NOTIFIED: 1
        }
    },
    OVER_STOP: {
        STATE: {
            UNKNOWN: 0,
            NOTIFIED: 1
        }
    },
    LOG: {
        TYPE: {
            API: 'api'
        },
        ACTION: {
            CREATE: 'create',
            CREATE_MULTIPLE: 'create_multiple',
            READ: 'read',
            READ_MULTIPLE: 'read_multiple',
            UPDATE: 'update',
            UPDATE_MULTIPLE: 'update_multiple',
            DELETE: 'delete',
            DELETE_MULTIPLE: 'delete_multiple',
            DEVICE: {
                ASSIGN: {
                    PARTNER: 'assign_device_to_partner',
                    USER: 'assign_device_to_user'
                },
                UNASSIGN: {
                    PARTNER: 'unassign_device_from_partner',
                    USER: 'unassign_device_from_user'
                }
            },
            USER: {
                VERIFY: {
                    REGISTRATION_TOKEN: 'verify_registration_token',
                    TOKEN: 'token'
                },
                CHANGE_PASSWORD: 'change_password',
                RESET_PASSWORD: 'reset_password'
            },
            LOGIN: 'login',
            LOGOUT: 'logout',
            SEARCH: 'search',
            SEARCH_COUNTS: 'search_counts',
            RESTART: 'restart',
            FILE_UPLOAD: 'file_upload',
            FILE_DOWNLOAD: 'file_download',
            TOKEN: {
                GENERATE: 'generate_token',
                REFRESH: 'refresh_token',
            },
            REFRESH: "refresh",
        },
        ACTIVITY: {
            TYPE: {
                ADMIN_USER_CREATION: 'admin_user_creation',
                ADMIN_USER_DELETION: 'admin_user_deletion',
                API: 'api',
                AUTHENTICATION: 'authentication',
                AUTHORIZATION: 'authorization',
                CHANGE_PASSWORD: 'change_password',
                LOGOUT: 'logout',
                RESET_PASSWORD: 'reset_password',
                USER_CREATION: 'user_creation',
                USER_DELETION: 'user_deletion',
                ADMIN_PRIVILEGES: 'admin_privileges'
            }
        }
    },
    ALERT: {
        TYPE: {
            SMS: 'sms',
            EMAIL: 'email',
            UI: 'ui',
            FCM: 'fcm'
        },
        STATUS: {
            ACKNOWLEDGED: 'acknowledged',
            AUTO_CLOSED: 'auto_closed',
            CLOSED: 'closed',
            COMPLETED: 'completed',
            IN_PROGRESS: 'in_progress',
            OPEN: 'open',
            PENDING: 'pending',
            UNACKNOWLEDGED: 'unacknowledged',
        },
        CHANNEL: {
            REST_API: 'rest_api',
            SMTP: 'smtp',
            AWS: {
                SNS: 'aws_sns'
            },
            STATUS: {
                SUCCESS: "success",
                FAILED: "failed"
            }
        },
        CATEGORY: {
            INCIDENT: 'incident',
            EVENT: 'event',
            ACTION: 'action',
            INSIGHT: 'insight',
        },
        SUB_CATEGORY: {
            ROUTE_ENTRY: 'route_entry',
            ROUTE_EXIT: 'route_exit',
            ROUTE_START: 'route_start',
            ROUTE_END: 'route_end',
            ROUTE_CHECKPOINT: 'route_checkpoint',
            ROUTE_RE_ENTRY: "route_re_entry",
            GEOFENCE_ENTRY: 'geofence_entry',
            GEOFENCE_EXIT: 'geofence_exit',
            GEOFENCE_THRESHOLD_BREACH: 'geofence_threshold_breach',
            OVERSTOP: 'overstop',
            OVERSPEED: 'overspeed',
            LOW_BATTERY: 'low_battery',
            MOVEMENT: 'movement',
            TAMPER: 'tamper',
            BATTERY_DISCONNECT: 'battery_disconnect',
            BATTERY_CONNECT: 'battery_connect',
            BMS_BATTERY_ERROR: "bms_battery_error",
            BMS_BATTERY_WARNING: "bms_battery_warning",
            EMERGENCY_SOS: 'emergency_sos',
            HIGH_TEMPERATURE: "high_temperature",
            LOW_TEMPERATURE: "low_temperature",
            OVER_CHARGE: "over_charge",
            OVER_CURRENT: "over_current",
            GEO_FENCE: "geo_fence",
            DROP: "drop",
            VEHICLE:{
                OVERSPEEDING: "overspeeding",
                RAPID_ACCELERATION: "rapid_acceleration",
                POWER_DISCONNECT: 'power_disconnect',
                IGNITION_ALERT: 'ignition_alert',
                STA_BREACH: 'sta_breach',
                ROUTE_DEVIATION: 'route_deviation',
                DRIVER_FATIGUE:'driver_fatigue',
                COLLISION_WARNING:'collision_warning',
                EV_BATTERY_SOC_LOW:'ev_battery_soc_low',
                EV_IGNITION_STATUS:'ev_ignition_status',
                TOWALERT:'tow_alert',
                GEOFENCEBREACH: "geofence_breach",
                SHARP_TURN:'sharp_turn',
                HARSH_BRAKING: "harsh_braking",
                EV_BATTERY_SWAP_ALERT:'ev_battery_swap_alert',
                CONTINUOUS_DRIVING:'continuous_driving',
                NO_GO_ZONE:'no_go_zone',
                ACCIDENT_PRONE_ZONE:'accident_prone_zone',
                PANIC_BUTTON_PRESS:'panic_button_press',
                EV_BATTERY_CHARGING_STATUS:'ev_battery_charging_status',
                SEAT_BELT_COMPLIANCE:'seat_belt_compliance',
                LOW_BATTERY:'low_battery',
                TRAFFIC_LIGHT_VIOLATION:'traffic_light_violation',
                DRIVER_DISTRACTION: 'driver_distraction',
                GEOFENCE_SPEED_VIOLATION: "geofence_speed_violation"
            },
            BATTERY: {
                CURRENT_OUTDATED: "current_outdated",
                PDU_FAILURE: "pdu_failure",
                PDU_OVERTEMPERATURE: "pdu_overtemperature",
                PDU_LOCK: "pdu_lock",
                DATA_CORRUPTED: "data_corrupted",
                BMS_AUTHENTICATION_FAIL: "bms_authentication_fail",
                FW_CFG_INCOMPATIBLE: "fw_cfg_incompatible",
                CHARGER_AUTHENTICATION_FAIL: "charger_authentication_fail",
                OVERVOLTAGE_ERROR: "overvoltage_error",
                UNDERVOLTAGE_ERROR: "undervoltage_error",
                OVER_TEMPERATURE_ERROR: "over_temperature_error",
                UNDER_TEMPERATURE_ERROR: "under_temperature_error",
                OVERLOAD_ERROR: "overload_error",
                CURRENT_SHORT_CIRCUIT: "current_short_circuit",
                BATT_PARAMETER_TIMEOUT: "batt_parameter_timeout",
                PRECHARGE_FAILURE: "precharge_failure"
            },
            INCIDENT: {
                ANTI_SOCIAL_ELEMENTS: 'anti_social_elements',
                CABLE_CUT: 'cable_cut',
                CONSTRUCTION_ACTIVITY: 'construction_activity',
                DANGER_TO_LIFE: 'danger_to_life',
                DEFAULT: 'default',
                DEVELOPMENT_ACTIVITY: 'development_activity',
                EMERGENCY: 'emergency',
                ENCROACHMENT: 'encroachment',
                EXCAVATION: 'excavation',
                LEAK: 'leak',
                OTHER: 'other',
                PIPELINE_OR_CABLE_EXPOSURE: 'pipeline_or_cable_exposure',
                ROAD_WIDENING_ACTIVITY: 'road_widening_activity',
                SUSPICIOUS_ACTIVITY: 'suspicious_activity',
                VULNERABLE_AREA: 'vulnerable_area'
            },
            ATTENDANCE: {
                ON: "attendance_on",
                OFF: "attendance_off"
            },
            LID: {
                OPEN: "lid_open",
                CLOSE: "lid_close"
            },
            FR_REGISTRATION: {
                SUCCESS: "fr_registration_success",
                FAILURE: "fr_registration_failure"
            },
            FR_CHECK_IN: {
                SUCCESS: "fr_check_in_success",
                FAILURE: "fr_check_in_failure",
                MISSED: "fr_check_in_missed",
            },
            ELECTRICITY_METERING: {
                DATA: "electricity_metering_data",
                STATUS: "electricity_metering_status"
            },
            BMS: {
                EVENT: 'battery_health_stat',
                ALERT: 'alert',
                ELEKTRONIKA_EVENT: 'battery_health_stat',
                ELEKTRONIKA_ALERT: 'alert',
                B_BIN: 'b_bin',
                B_BMS: 'b_bms',
                IOA: 'bms_ioa',
                ALARM: 'bms_alarm',
                FAULT: 'bms_fault',
                CONFIG_IOA: 'bms_config_dio',
                BOOT: 'bms_boot',
                LOCATION: 'bms_location'
            },
            ASSET_FAULT_STATUS: "asset_fault_status",
            GAS_METERING_DATA: "gas_metering_data",
            WATER_METERING_DATA: "water_metering_data",
            NO_WATER_FLOW: "no_water_flow",
            WATER_REVERSE_FLOW: "water_reverse_flow",
            WATER_METER_TAMPER: "water_meter_tamper",
            WATER_LOW_BATTERY: "water_low_battery",
            // WATER_LEAKAGE: "water_leakage",
            NO_GAS_FLOW: "no_gas_flow",
            GAS_REVERSE_FLOW: "gas_reverse_flow",
            GAS_METER_TAMPER: "gas_meter_tamper",
            GAS_LOW_BATTERY: "gas_low_battery",
            // GAS_LEAKAGE: "gas_leakage",
            A_CONFLICT_OCCURRED_DURING_THE_DELIVERY_OF_A_CONSUMPTION_VALUE: "a_conflict_occurred_during_the_delivery_of_a_consumption_value",
            A_DUPLICATE_WAS_DELIVERED_WHEN_THE_CONSUMPTION_VALUES_WERE_SUBMITTED: "a_duplicate_was_delivered_when_the_consumption_values_were_submitted",
            FIRMWARE_ACTIVATED: "firmware_activated",
            STRONG_DC_FIELD_DETECTED: "strong_dc_field_detected",
            NO_STRONG_DC_FIELD_ANYMORE: "no_strong_dc_field_anymore",
            METER_COVER_REMOVED: "meter_cover_removed",
            LIMITER_THRESHOLD_CHANGED: "limiter_threshold_changed",
            MISSING_NEUTRAL: "missing_neutral",
            POWER_RESUMED: "power_resumed",
            TOTAL_POWER_FAILURE: "total_power_failure",
            PHASE_1_REVERSED: "phase_1_reversed",
            PHASE_1_REVERSED_DISAPPEARED: "phase_1_reversed_disappeared",
            DEVICE_DISCONNECTOR_HAS_BEEN_CONNECTED: "device_disconnector_has_been_connected",
            DEVICE_DISCONNECTOR_HAS_BEEN_DISCONNECTED: "device_disconnector_has_been_disconnected",
            EMETER_FIRMWARE_VERSION_UNDER_LEGAL_CONTROL: "emeter_firmware_version_under_legal_control",
            NEUTRAL_LOSS_END: "neutral_loss_end",
            MAINS_FAILURE: "mains_failure",
            DEVICE_DISCONNECTOR_IS_CONNECTED: "device_disconnector_is_connected",
            DEVICE_DISCONNECTOR_IS_DISCONNECTED: "device_disconnector_is_disconnected",
            DEVICE_DISCONNECTOR_IS_READY_FOR_RECONNECT: "device_disconnector_is_ready_for_reconnect",
            UNABLE_TO_RETRIEVE_DATA_2S: "unable_to_retrieve_data_2s",
            EMETER_FIRMWARE_VERSION: "emeter_firmware_version",
            UNDERVOLTAGE: "undervoltage",
            OVERVOLTAGE: "overvoltage",
            CURRENT_UNBALANCE: "current_unbalance",
            CURRENT_UNBALANCE_DISAPPEARED: "current_unbalance_disappeared",
            OVERVOLTAGE_DISAPPEARED: "overvoltage_disappeared",
            UNDERVOLTAGE_DISAPPEARED: "undervoltage_disappeared",
            CURRENT_BYPASS: "current_bypass",
            CURRENT_BYPASS_DISAPPEARED: "current_bypass_disappeared",
            REAL_TIME_CLOCK_DATE_AND_TIME: "real_time_clock_date_and_time",
            DEMAND_INTEGRATION_PERIOD: "demand_integration_period",
            PROFILE_CAPTURE_PERIOD: "profile_capture_period",
            SINGLEACTION_SCHEDULE_FOR_BILLING_DATES: "singleaction_schedule_for_billing_dates",
            ACTIVITY_CALENDAR_FOR_TIME_ZONES_ETC: "activity_calendar_for_time_zones_etc",
            NEUTRAL_DISTURBANCE: "neutral_disturbance",
            NEUTRAL_DISTURBANCE_DISAPPEARED: "neutral_disturbance_disappeared",
            EARTH_LOAD_OCCURENCE: "earth_load_occurence",
            EARTH_LOAD_RESTORATION: "earth_load_restoration",
            LLS_SECRET_MR_CHANGE: "lls_secret_mr_change",
            HLS_KEY_US_CHANGE: "hls_key_us_change",
            ESWF_CHANGE: "eswf_change",
            MD_RESET: "md_reset",
            PLUG_IN_COMMUNICATION_MODULE_REMOVAL_OCCURENCE: "plug_in_communication_module_removal_occurence",
            PLUG_IN_COMMUNICATION_MODULE_REMOVAL_RESTORATION: "plug_in_communication_module_removal_restoration",
            CONFIGURATION_CHANGE_TO_POSTPAID_MODE: "configuration_change_to_postpaid_mode",
            CONFIGURATION_CHANGE_TO_PREPAID_MODE: "configuration_change_to_prepaid_mode",
            CONFIGURATION_CHANGE_TO_FORWARDED_ONLY_MODE: "configuration_change_to_forwarded_only_mode",
            CONFIGURATION_CHANGE_TO_IMPORT_AND_EXPORT_MODE: "configuration_change_to_import_and_export_mode",
            OVERLOAD_OCCURENCE: "overload_occurence",
            OVERLOAD_RESTORATION: "overload_restoration",
            ENABLED_LOAD_LIMIT_FUNCTION: "enabled_load_limit_function",
            DISABLED_LOAD_LIMIT_FUNCTION: "disabled_load_limit_function",
            METER_LOAD_DIS_CONNECTED: "meter_load_dis_connected",
            INCREMENT_IN_BILLING_COUNTER: "increment_in_billing_counter",
            DEVICE_ONLINE: "device_online",
            HEALTH_PACKET: "health_packet",
            INSIGHTS_PACKET: "insights_packet",
            ANALOG_SENSOR_FAULT_STATUS: "analog_sensor_fault_status",
            DEVICE_BATTERY_STATUS_CHANGE: "device_battery_status_change",
            IOT_DEVICE_BATTERY_DISCONNECTED: "iot_device_battery_disconnected",
            IOT_DEVICE_BATTERY_NORMAL: "iot_device_battery_normal",
            IOT_DEVICE_BATTERY_LOW: "iot_device_battery_low",
            SERIAL_COMMUNICATION_FAULT: "serial_communication_fault",
            PEAK_LOAD_ALERT: 'peak_load_alert',
            HIGH_ENERGY_ALERT: 'high_energy_alert',
            OVER_BUDGET_ALERT: 'over_budget_alert',
            HIGH_BILL_ALERT: 'high_bill_alert',
            COMMAND_ACKNOWLEDGEMENT: "command_acknowledgement",
            STARTUP_EVENT: "startup_event",
            DEVICE_POWER: {
                ON: "device_power_on",
                OFF: "device_power_off"
            },
            BATTERY_LOW: {
                INTERNAL: {
                    OCCURRED: "battery_low_internal_occurred",
                    RESOLVED: "battery_low_internal_resolved"
                }
            },
            WAKEUP_EVENT_PACKET: "wakeup_event_packet",
            ASSET_LIVE_STATUS: "asset_live_status",
            IGNITION: {
                OFF: "ignition_off",
                ON: "ignition_on",
            },
            POWER: {
                OFF: "power_off",
                ON: "power_on",
            },
            FUEL: {
                FILL: "fuel_fill",
                REMOVED: "fuel_removed",
                THEFT: "fuel_theft",
                LEVEL: {
                    ABOVE_MID: "fuel_level_above_mid",
                    BELOW_MID: "fuel_level_below_mid",
                    LOW: "fuel_level_low",
                    NORMAL: "fuel_level_normal",
                    ALARM: "fuel_level_alarm"
                },
                SENSOR: {
                    DISCONNECTED: "fuel_sensor_disconnected",
                    RECONNECTED: "fuel_sensor_reconnected",
                },
            },
            PARAMETER: {
                ABNORMALITY: {
                    STATUS_CHANGE: 'parameter_abnormality_status_change'
                }
            },
            INPUT_POWER_SUPPLY_STATUS: "input_power_supply_status",
            EXTERNAL_BATTERY_CONNECTED: "external_battery_connected",
            EXTERNAL_BATTERY_DISCONNECTED: "external_battery_disconnected",
            COMMUNICATION_FAILURE: "communication_failure",
            H2FC_SITE_ON_DG: "h2fc_site_on_dg",
            H2FC_SITE_ON_BATTERY_GT_1HR: "h2fc_site_on_battery_gt_1hr",
            H2FC_SITE_ON_DG_GT_3HR: "h2fc_site_on_dg_gt_3hr",
            H2FC_SITE_SOC_LOW: "h2fc_site_soc_low",
            H2FC_BATTERY_LOW: "h2fc_battery_low",
            H2FC_MOD1_SOC_LOW: "h2fc_mod1_soc_Low",
            H2FC_MOD2_SOC_LOW: "h2fc_mod2_soc_low",
            H2FC_MOD3_SOC_LOW: "h2fc_mod3_soc_low",
            H2FC_MOD4_SOC_LOW: "h2fc_mod4_soc_low",
            H2FC_MOD5_SOC_LOW: "h2fc_mod5_soc_low",
            H2FC_MOD6_SOC_LOW: "h2fc_mod6_soc_low",
            H2FC_MOD7_SOC_LOW: "h2fc_mod7_soc_low",
            H2FC_MOD8_SOC_LOW: "h2fc_mod8_soc_low",
            H2FC_MOD9_SOC_LOW: "h2fc_mod9_soc_low",
            H2FC_MOD10_SOC_LOW: "h2fc_mod10_soc_low",
            H2FC_MOD11_SOC_LOW: "h2fc_mod11_soc_low",
            H2FC_MOD12_SOC_LOW: "h2fc_mod12_soc_low",
            H2FC_MOD13_SOC_LOW: "h2fc_mod13_soc_low",
            H2FC_MOD14_SOC_LOW: "h2fc_mod14_soc_low",
            H2FC_MOD15_SOC_LOW: "h2fc_mod15_soc_low",
            H2FC_LINE_VOLTAGE_A_HIGH: "h2fc_line_voltage_a_high",
            H2FC_LINE_VOLTAGE_A_LOW: "h2fc_line_voltage_a_low",
            H2FC_LINE_VOLTAGE_B_HIGH: "h2fc_line_voltage_b_high",
            H2FC_LINE_VOLTAGE_B_LOW: "h2fc_line_voltage_b_low",
            H2FC_LINE_VOLTAGE_C_HIGH: "h2fc_line_voltage_c_high",
            H2FC_LINE_VOLTAGE_C_LOW: "h2fc_line_voltage_c_low",
            H2FC_DC_VOLTAGE_HIGH: "h2fc_dc_voltage_high",
            H2FC_DC_VOLTAGE_LOW: "h2fc_dc_voltage_low",
            H2FC_DG_LOW_FUEL_LEVEL_1: "h2fc_dg_low_fuel_level_1",
            H2FC_DG_FAULTY_FUEL_SENSOR_1: "h2fc_dg_faulty_fuel_sensor_1",
            H2FC_FC_FUEL_LEVEL_LOW: "h2fc_fc_fuel_level_low",
            H2FC_NO_SNMP_DATA_COLLECTION: "h2fc_no_snmp_data_collection",
            H2FC_DEVICE_NOT_REACHABLE: "h2fc_device_not_reachable",
            H2FC_HIGH_ICMP_PING_LOSS: "h2fc_high_icmp_ping_loss",
            H2FC_HIGH_ICMP_PING_RESPONSE_TIME: "h2fc_high_icmp_ping_response_time",
            H2FC_DG_FAIL_TO_START: "h2fc_dg_fail_to_start",
            H2FC_COMM_FAIL_SMPS_TO_AMF: "h2fc_comm_fail_smps_to_amf",
            H2FC_B_PHASE_FAIL: "h2fc_b_phase_fail",
            H2FC_B_PHASE_HIGH: "h2fc_b_phase_high",
            H2FC_EB_ON_BAT_DS_CH: "h2fc_eb_on_bat_ds_ch",
            H2FC_RECT_OVERLOAD: "h2fc_rect_overload",
            H2FC_AC_PH_B_FAIL: "h2fc_ac_ph_b_fail",
            H2FC_RECT_4AC_FAIL: "h2fc_rect_4ac_fail",
            BATT_VOLTAGE_PRO_MOD: "batt_voltage_pro_mod",

            //CODE FOR JPL ALERT
            JPL_DG_LOW_FUEL_LEVEL: "jpl_dg_low_fuel_level",
            JPL_BATT_MOD_2_ISOLATED: "jpl_batt_mod_2_isolated",
            JPL_COMM_FAIL_BATT_MOD_3: "jpl_comm_fail_batt_mod_3",
            JPL_LOAD_ON_BATT: "jpl_load_on_batt",
            JPL_TEMP_1_HIGH: "jpl_temp_1_high",
            JPL_CELL_UNDER_VOLT_PROT_MOD_2: "jpl_cell_under_volt_prot_mod_2",
            JPL_CELL_DIS_CH_OVER_TEMP_PROT_MOD_2: "jpl_cell_dis_ch_over_temp_prot_mod_2",
            JPL_MOSFET_OVER_TEMP: "jpl_mosfet_over_temp",
            JPL_CELL_OVER_TEMP_1: "jpl_cell_over_temp_1",
            JPL_BATT_OVER_CURR_PROT_MOD_3: "jpl_batt_over_curr_prot_mod_3",
            JPL_LOAD_MCB_3_TRIP: "jpl_load_mcb_3_trip",

            ACTION: {
                CREATE: 'create',
                READ: 'read',
                REPORT: 'report',
                UPDATE: 'update',
                DELETE: 'delete',
                RESET_PASSWORD: 'reset_password',
                REGISTER: 'register',
                RIGHT_TO_KNOW: "right_to_know",
                TOKEN: {
                    GENERATE: 'generate_token',
                    REFRESH: 'refresh_token'
                },
                FCM: {
                    PING: "ping"
                },
            }
        },
        PRIORITY: {
            CRITICAL: 0,
            HIGH: 1,
            MAJOR: 2,
            MINOR: 3,
            LOW: 4
        },
        SUBSCRIPTION: {
            FREQUENCY: {
                OCCASIONAL: 'occasional',
                DAILY: 'daily'
            }
        },
        EMAIL: {
            BODY: {
                TYPE: {
                    HTML: 'html',
                    TEXT: 'text'
                }
            }
        }
    },
    API: {
        AUTH_TYPE: {
            NO_AUTH: 'no_auth',
            HEADER_AUTHORIZATION: 'header_authorization',
            HEADER_AUTHORIZATION_BEARER: 'header_authorization_bearer',
        },
        HEADER: {
            AUTHORIZATION: {
                TYPE: {
                    BEARER: "Bearer",
                    KEY: "key"
                }
            }
        }
    },
    INCIDENT: {
        TYPE: {
            INCIDENT: 'incident',
            SOS: 'sos'
        },
        SUB_TYPE: {
            ANTI_SOCIAL_ELEMENTS: 'anti_social_elements',
            CABLE_CUT: 'cable_cut',
            CONSTRUCTION_ACTIVITY: 'construction_activity',
            DANGER_TO_LIFE: 'danger_to_life',
            DEFAULT: 'default',
            DEVELOPMENT_ACTIVITY: 'development_activity',
            EMERGENCY: 'emergency',
            EMERGENCY_SOS: 'emergency_sos',
            ENCROACHMENT: 'encroachment',
            EXCAVATION: 'excavation',
            LEAK: 'leak',
            OTHER: 'other',
            PIPELINE_OR_CABLE_EXPOSURE: 'pipeline_or_cable_exposure',
            ROAD_WIDENING_ACTIVITY: 'road_widening_activity',
            SUSPICIOUS_ACTIVITY: 'suspicious_activity',
            VULNERABLE_AREA: 'vulnerable_area'
        },
        STATUS: {
            OPEN: 'open',
            PENDING: 'pending',
            IN_PROGRESS: 'in_progress',
            ACKNOWLEDGED: 'acknowledged',
            UNACKNOWLEDGED: 'unacknowledged',
            COMPLETED: 'completed',
            CLOSED: 'closed'
        },
    },
    KAFKA: {
        ERROR: {
            CODE: {
                UNKNOWN_MEMBER_ID: '25',
            }
        },
        CLIENT_ID: "JEVAA",
        SSL_PATH: {
            CERT: "ssl/client1_cert_new.pem",
            KEY: "ssl/client1_key_new.pem",
            FORMAT: "utf-8"
        }
    },
    MONGO: {
        ERROR: {
            CODE: {
                CURSOR_NOT_FOUND: '43',
                UNIQUE: '11000',
            }
        }
    },
    SCHEDULER: {
        SIM_EVENT: {
            TASK: {
                SIM: 'scheduler_sim_event_task_sim'
            }
        },
        FILE_DOWNLOAD: {
            TASK: {
                DELETE_DEVICE: 'scheduler_file_download_task_delete_device'
            }
        },
        INACTIVE_ENTITY: {
            TASK: {
                DELETE_ZOMBIE_USERS: 'scheduler_inactive_entity_task_delete_zombie_users'
            },
            USER: {
                STATUS: {
                    EMAIL_NOT_VERIFIED: 'email_not_verified'
                }
            }
        },
        STALE_ENTITY: {
            TASK: {
                DELETE_STALE_EVENTS: 'scheduler_stale_entity_task_delete_stale_events',
                DELETE_STALE_MESSAGES: 'scheduler_stale_entity_task_delete_stale_messages'
            }
        },
    },
    CAPTCHA: {
        TYPE: {
            TICKBOX: 'tickbox',
            INVISIBLE: 'invisible',
            ANDROID: 'android'
        }
    },
    SESSION_GROUP: {
        STATUS: {
            ACTIVE: 'active',
            COMPLETED: 'completed',
            CLOSED: 'closed',
            SCHEDULED: 'scheduled'
        },
        TYPE: {
            ONE_TO_ONE: 'one_to_one',
            ONE_TO_MANY: 'one_to_many',
            MANY_TO_MANY: 'many_to_many',
        },
        ENTITIES: {
            EVENTS: "events"
        }
    },
    SESSION_GROUP_CONSENT: {
        STATUS: {
            PENDING: 'pending',
            ACTIVE: 'active',
            APPROVED: 'approved',
            REJECTED: 'rejected',
            EXITED: 'exited',
            REMOVED: 'removed',
            EXPIRED: 'expired',
        },
    },
    SIM_EVENT: {
        SIM: {
            CONSENT: {
                STATUS: {
                    APPROVED: "approved",
                    NOT_REGISTERED: "not_registered",
                    REJECTED: "rejected",
                    REQUESTED: "requested",
                    UNCLEAR: "unclear",
                }
            }
        }
    },
    FCM: {
        PING: {
            STATE: {
                UNKNOWN: 0,
                NOTIFIED: 1
            }
        }
    },
    HES: {
        BLOCKLOAD: {
            OBIS_CODES: ['1-0:12.27.0*255', '1-0:1.29.0*255', '1-0:9.29.0*255', '1-0:11.27.0*255', '1-0:1.7.0*255', '1-0:9.7.0*255']
        },
        OBIS_CODES: ['1-0:12.27.0*255', '1-0:1.8.0*255', '1-0:12.7.0*255', '1-0:11.27.0*255', '1-0:1.7.0*255', '1-0:9.7.0*255'],
        URL: {
            GET_READING_BY_OBIS_CODE: (deviceId, registerId, fromDate, toDate) => `https://sit.meter.sem.jiothings.net/zonos-api/api/1/devices/${deviceId}/registers/${registerId}/metered-data?from=${fromDate}&to=${toDate}`
        },
        NO_OF_Months: 6
    },
    WEBPUSH: {
        VAPID_KEYS: {
            PUBLIC_KEY: "BFx-Li5IL1R2QDNqWweKidCDNC8ujLA8qVFBFk8UEHbzEnL2oNo_c9iPdKkjdxXDW5jw8QFx1iALC3DLPzQp9Nw",
            PRIVATE_KEY: "vDElA5WW34-jNeMXg07Hp6vY0wdUCZ5y2g7eEvE3vFU"
        },
        MAIL_TO: "mailto:jiotadmin@jio.io"
    },
    RG: {
        HIERARCHY: {
            TOWNSHIP: 'Township',
            TSAREA: 'T S Area',
            SECTOR: 'Sector',
            BUILDING: 'Building',
            FLAT: 'Flat',
        },
        NAME: 'rg'
    },
    JSP: {
        NAME: 'jsp'
    },
    META: {
        NAME: 'meta'
    },
    RRL: {
        HIERARCHY: {
            STORE: 'Store'
        },
        NAME: 'rrl',
        REPORT: {
            SCOPE_2_ENERGY_TO_CARBON_EMISSION: .85,
            SCOPE_1_ENERGY_TO_CARBON_EMISSION: 2.653,
            STORE_FORMATS: {
                FRESH: 'fresh',
                SMART: 'smart',
                SAHAKARI_BHANDAR: 'sahakari_bhandar',
                CPC: 'cpc',
                DC: 'dc',
                PCS: 'pcs',
                DIGITAL: 'digital',
                DX: 'dx',
                I_STORE: 'istore',
                CDIT_DC: 'cdit_dc',
                MARKET: 'market',
                JEWELS: 'jewels',
                FOOT_PRINT: 'foot_print',
                BRAND: 'brand',
                PAYLESS: 'payless',
                TRENDS: 'trends',
                TRENDS_DC: 'trends_dc',
                MALL_MANAGEMENT: 'mall_management',
                BRAND_DC: 'brand_dc',
                FEC: 'fec',
                WAREHOUSE: 'warehouse',
                E_COMMERCE: 'ecommerce',
                SMART_POINT: 'smart_point'
            }
        },
        STATS: {
            PARAMS: {
                REASON: "reason",
                SLAVE_ID: "slaveId",
                SENSOR_INSTANCE_ID: "sensorInstanceId",
                DEVICE_MAKE: "deviceMake",
                DEVICE_APP_REBOOT_REASON: "deviceAppRebootReason",
                DEVICE_APP_REBOOT_INDICATE_REASON: "deviceAppRebootIndicateReason",
                VALUE: "value",
                IGNITION: "ignition",
                SENSOR_FRIENDLY_NAME: "sensorFriendlyName",
                UNIT: "unit",
                METERING_PARAMETERS: "meteringParameters",
                PHASE: "phase",
                THRESHOLD: "threshold",
                POWER_FACTOR: "powerFactor",
                POWER_FACTOR_B_PHASE: "powerFactorBPhase",
                POWER_FACTOR_R_PHASE: "powerFactorRPhase",
                POWER_FACTOR_Y_PHASE: "powerFactorYPhase",
                ACTIVE_POWER: "activePower",
                ACTIVE_POWER_B_PHASE: "activePowerBPhase",
                ACTIVE_POWER_R_PHASE: "activePowerRPhase",
                ACTIVE_POWER_Y_PHASE: "activePowerYPhase",
                APPARENT_POWER: "apparentPower",
                APPARENT_POWER_B_PHASE: "apparentPowerBPhase",
                APPARENT_POWER_R_PHASE: "apparentPowerRPhase",
                APPARENT_POWER_Y_PHASE: "apparentPowerYPhase",
                CURRENT_B_PHASE: "currentBPhase",
                CURRENT_R_PHASE: "currentRPhase",
                CURRENT_Y_PHASE: "currentYPhase",
                CURRENT_TOTAL: "currentTotal",
                FREQUENCY: "frequency",
                REACTIVE_POWER: "reactivePower",
                REACTIVE_POWER_R_PHASE: "reactivePowerRPhase",
                REACTIVE_POWER_Y_PHASE: "reactivePowerYPhase",
                VOLTAGE_B_PHASE: "voltageBPhase",
                VOLTAGE_B_R_PHASE: "voltageBRPhase",
                VOLTAGE_LINE_TO_LINE_AVERAGE: "voltageLineToLineAverage",
                VOLTAGE_LINE_TO_NEUTRAL_AVERAGE: "voltageLineToNeutralAverage",
                VOLTAGE_R_PHASE: "voltageRPhase",
                VOLTAGE_R_Y_PHASE: "voltageRYPhase",
                VOLTAGE_Y_B_PHASE: "voltageYBPhase",
                VOLTAGE_Y_PHASE: "voltageYPhase",
                ACTIVE_ENERGY: "activeEnergy",
                APPARENT_ENERGY: "apparentEnergy",
                REACTIVE_ENERGY: "reactiveEnergy",
                FUEL_IN_LITRES: "fuelInLitres",
                FUEL_LEVEL_CURR: "fuelLevelCurr",
                FUEL_LEVEL_DIFF: "fuelLevelDiff",
                FUEL_LEVEL_PREV: "fuelLevelPrev",
                FUEL_CONSUMED_FROM_LAST_POWER_ON: "fuelConsumedFromLastPowerOn",
                ABN: 'abn',
                FUL: 'ful',
                FLR: 'flr'
            }
        }
    },
    C2D: {
        JNOPS: 'jnops',
        JIO_UTILS: 'jio_utils',
        HES: 'hes',
        OFFLINE: 'offline'
    },
    D2C: {
        JNOPS: 'jnops',
        JIO_UTILS: 'jio_utils',
        HES: 'hes',
        OFFLINE: 'offline'
    },
    CALENDER: {
        DAY: 'day',
        MONTH: 'month',
        YEAR: 'year',
        HOUR: 'hour',
        WEEK: 'week'
    },
    JNOPS: {
        ENTITY: {
            ENTERPRISE: '1',
            DEVICE: '2'
        },
        OPERATION: {
            CREATE: '1',
            UPDATE: '3',
            DELETE: '4'
        },
        ENTITIES: [null, "entity", "device"],
        OPERATIONS: [null, "create", "read", "update", "delete"],
        ONBOARDING_STATUS: ["incomplete", "complete"],
        DEVICE_TYPE: ["IPDD", "NIDD"],
    },
    JOB_STATUS: ["completed", "error", "inprogress", "ready_for_execution", "partial_success"],
    // NIDD_ADAPTER: {
    //     COMMUNICATION_MODE: ["transparent", "non_transparent"]
    // },
    COMMUNICATION_MODE: ["transparent", "non-transparent"],
    DEFAULT_ENTERPRISE: 'meta',
    H2FC: {
        HIERARCHY: {
            TOWER: 'Tower'
        },
        NAME: 'tower',
        FILES: 'h2fc-files',
        SITE_INVENTORY:{
            VENDOR_FILE: 'vendor_file',
            YIELD_FILE:'yield_file',
            TARIFF_FILE:'tariff_file',
            MPPT_FILE:'mppt_file',
            BATT_MOD_FILE:'batt_mod_file'
        }
    },
    H2FC_ALERT_MAPPING: {
        "Site On Battery": 'H2FC_BATTERY_LOW',
        "Site On DG": 'H2FC_SITE_ON_DG',
        "Site On Battery Gt 1Hr": 'H2FC_SITE_ON_BATTERY_GT_1HR',
        "Site On DG Gt 3Hr": 'H2FC_SITE_ON_DG_GT_3HR',
        "Site SOC Low": 'H2FC_SITE_SOC_LOW',
        "Mod1 SOC Low": 'H2FC_MOD1_SOC_LOW',
        "Mod2 SOC Low": 'H2FC_MOD2_SOC_LOW',
        "Mod3 SOC Low": 'H2FC_MOD3_SOC_LOW',
        "Mod4 SOC Low": 'H2FC_MOD4_SOC_LOW',
        "Mod5 SOC Low": 'H2FC_MOD5_SOC_LOW',
        "Mod6 SOC Low": 'H2FC_MOD6_SOC_LOW',
        "Mod7 SOC Low": 'H2FC_MOD7_SOC_LOW',
        "Mod8 SOC Low": 'H2FC_MOD8_SOC_LOW',
        "Mod9 SOC Low": 'H2FC_MOD9_SOC_LOW',
        "Mod10 SOC Low": 'H2FC_MOD10_SOC_LOW',
        "Mod11 SOC Low": 'H2FC_MOD11_SOC_LOW',
        "Mod12 SOC Low": 'H2FC_MOD12_SOC_LOW',
        "Mod13 SOC Low": 'H2FC_MOD13_SOC_LOW',
        "Mod14 SOC Low": 'H2FC_MOD14_SOC_LOW',
        "Mod15 SOC Low": 'H2FC_MOD15_SOC_LOW',
        "Line Voltage A High": 'H2FC_LINE_VOLTAGE_A_HIGH',
        "Line Voltage A Low": 'H2FC_LINE_VOLTAGE_A_LOW',
        "Line Voltage B High": 'H2FC_LINE_VOLTAGE_B_HIGH',
        "Line Voltage B Low": 'H2FC_LINE_VOLTAGE_B_LOW',
        "Line Voltage C High": 'H2FC_LINE_VOLTAGE_C_HIGH',
        "Line Voltage C Low": 'H2FC_LINE_VOLTAGE_C_LOW',
        "DC Voltage High": 'H2FC_DC_VOLTAGE_HIGH',
        "DC Voltage Low": 'H2FC_DC_VOLTAGE_LOW',
        "DG Low Fuel Level 1": 'H2FC_DG_LOW_FUEL_LEVEL_1',
        "DG Faulty Fuel Sensor 1": 'H2FC_DG_FAULTY_FUEL_SENSOR_1',
        "FC Fuel Level Low": 'H2FC_FC_FUEL_LEVEL_LOW',
        "No SNMP data collection": 'H2FC_NO_SNMP_DATA_COLLECTION',
        "Device Not Reachable": 'H2FC_DEVICE_NOT_REACHABLE',
        "High ICMP ping loss": 'H2FC_HIGH_ICMP_PING_LOSS',
        "High ICMP ping response time": 'H2FC_HIGH_ICMP_PING_RESPONSE_TIME',
        "Server has been restarted": 'H2FC_SERVER_RESTARTED'

    },
    SMART_BATTERY: {
        STATUS_FLAGS: {
            IDLE: 0,
            CHARGING: 1,
            DISCHARGING: 2,
            MAX: 2
        },
        STAT_GRANULARITY: {
            HOUR: 3600000, //1 Hr = 3600000ms
            FIVE_MINUTES: 300000
        },
        MANUFACTURER: {
            ELEKTRONIKA: 'elektronika',
            RETHIUM: 'rethium',
            AEDITH: 'aedith'
        },
        EVENT_CODES: ["300", "400", "451"]
    },
    INSIGHT_TYPE: {
        TAG: "tag",
        CATEGORY: "insight"
    },
    GENERIC:{
        DAYTOMILLISECONDS: 24*3600*1000,
        DEFAULT_NUMBER_OF_DAYS_FOR_AVG : 7
    }
}