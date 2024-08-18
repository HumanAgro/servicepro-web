/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AccountRegistration {
  readonly ok: string;
  /** @maxLength 128 */
  password: string;
  /**
   * @minLength 10
   * @maxLength 80
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  profile?: DefaultProfile | null;
  /** @format email */
  email?: string;
  readonly uid: string;
  readonly refresh: string;
  readonly access: string;
}

export interface AccountRegistrationRetry {
  readonly ok: string;
  /** @maxLength 128 */
  password: string;
  /**
   * @minLength 10
   * @maxLength 80
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  profile?: DefaultProfile | null;
  /** @format email */
  email?: string;
  readonly uid: string;
  readonly refresh: string;
  readonly access: string;
}

export interface Address {
  /** @min 0 */
  id?: number | null;
  /** @maxLength 250 */
  value?: string;
  /** @maxLength 60 */
  district?: string;
  readonly region: Region | null;
  /** @default "user" */
  source?: SourceEnum;
  /** @maxLength 15 */
  postal_code?: string;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  readonly is_clean: boolean;
  readonly is_final: boolean;
}

export interface ChatButton {
  task: number;
  employee: number;
  /** @format uuid */
  message_uuid: string;
  /** ['rejected', 'applied', 'apply', 'reject'] */
  name: string;
  /** @format uuid */
  button_uuid?: string | null;
}

export interface ChatPush {
  task: number;
  employee: number;
  /** @format uuid */
  message_uuid: string;
  text: string;
}

export interface ChatStatus {
  task: number;
  employee: number;
  /** @format uuid */
  message_uuid: string;
  /** ['search', 'processing', 'approval', 'wait', 'on_way', 'pause', 'work', 'done'] */
  status: string;
  edits: any;
}

export interface ChatToken {
  readonly token: string;
}

export interface ControlPoint {
  readonly id: number;
  address?: Address | null;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 127 */
  name?: string;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  /** Permanent */
  is_permanent?: boolean;
  readonly organization: number;
}

export interface CookieTokenRefresh {
  readonly access: string;
}

export interface DaDataOrganization {
  inn: string;
  kpp: string;
  ogrn: string;
  /** @format date-time */
  ogrn_date: string;
  type: string;
  name_full_with_opf: string;
  name_short_with_opf: string;
  name_latin: string;
  name_full: string;
  name_short: string;
  owner_name: string;
  state_status: string;
  address: DaDataSimpleAddress;
}

export interface DaDataSimpleAddress {
  value: string;
  /** @format double */
  latitude: number;
  /** @format double */
  longitude: number;
}

export interface DefaultProfile {
  readonly id: number;
  /** @format uri */
  photo?: string | null;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 120 */
  last_name?: string;
  /** @maxLength 120 */
  first_name?: string;
  /** @maxLength 120 */
  middle_name?: string;
  /**
   * Email address
   * @format email
   * @maxLength 254
   */
  email?: string;
  /** @maxLength 128 */
  phone_number?: string;
  /** @maxLength 120 */
  position?: string;
  /** @maxLength 120 */
  telegram?: string;
  /** @maxLength 120 */
  whatsapp?: string;
  /** @maxLength 120 */
  viber?: string;
}

export interface Device {
  readonly id: number;
  /**
   * * `none` - none
   * * `db` - db
   * * `websocket` - websocket
   * * `email_app` - email_app
   * * `fcm_app` - fcm_app
   * * `fcm_web` - fcm_web
   * * `hpk_app` - hpk_app
   * * `apns_app` - apns_app
   * * `telegram` - telegram
   */
  type: TypeEnum;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 255 */
  user_agent?: string;
  /** @maxLength 255 */
  token: string;
  readonly user: number;
}

export interface EmployeeDetailed {
  readonly id: number;
  /**
   * * `server` - server
   * * `client` - client
   * * `engineer` - engineer
   * * `coordinator` - coordinator
   */
  role: RoleEnum;
  readonly profile: Profile;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** Active */
  is_active?: boolean;
  readonly organization: number;
}

export interface EmployeeDetailedWithRating {
  readonly id: number;
  /**
   * * `server` - server
   * * `client` - client
   * * `engineer` - engineer
   * * `coordinator` - coordinator
   */
  role: RoleEnum;
  readonly profile: Profile;
  readonly rating: EmployeeRating;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** Active */
  is_active?: boolean;
  readonly organization: number;
}

export interface EmployeeGeo {
  readonly id: number;
  /**
   * * `server` - server
   * * `client` - client
   * * `engineer` - engineer
   * * `coordinator` - coordinator
   */
  role: RoleEnum;
  readonly geolocation: EmployeeGeolocation[];
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** Active */
  is_active?: boolean;
  organization: number;
  profile?: number | null;
}

export interface EmployeeGeolocation {
  /** @format uuid */
  readonly uuid: string;
  /**
   * Longitude
   * @format double
   */
  lon: number;
  /**
   * Latitude
   * @format double
   */
  lat: number;
  /** @format date-time */
  real_date: string;
  /** @format date-time */
  readonly created_at: string;
}

export interface EmployeeRating {
  /** @format double */
  value?: number;
  /** @format date-time */
  readonly updated_at: string;
}

/**
 * * `info` - info
 * * `warning` - warning
 * * `critical` - critical
 */
export enum ExecutorLevelEnum {
  Info = "info",
  Warning = "warning",
  Critical = "critical",
}

/** * `vehicle_catalog` - vehicle_catalog */
export enum KeyEnum {
  VehicleCatalog = "vehicle_catalog",
}

/**
 * * `info` - info
 * * `warning` - warning
 * * `critical` - critical
 */
export enum LevelEnum {
  Info = "info",
  Warning = "warning",
  Critical = "critical",
}

/**
 * * `info` - info
 * * `problem` - problem
 * * `recommendation` - recommendation
 */
export enum MeaningEnum {
  Info = "info",
  Problem = "problem",
  Recommendation = "recommendation",
}

export interface MyEmployment {
  readonly id: number;
  /**
   * * `server` - server
   * * `client` - client
   * * `engineer` - engineer
   * * `coordinator` - coordinator
   */
  role: RoleEnum;
  readonly profile: Profile;
  readonly rating: EmployeeRating;
  readonly organization: Organization;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** Owner */
  is_owner?: boolean;
  /** Active */
  is_active?: boolean;
}

export interface MyInvite {
  readonly id: number;
  readonly is_expired: boolean;
  /**
   * * `server` - server
   * * `client` - client
   * * `engineer` - engineer
   * * `coordinator` - coordinator
   */
  role: RoleEnum;
  readonly organization: Organization;
  readonly profile: Profile;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /**
   * Username
   * @maxLength 120
   */
  user_username?: string;
  /**
   * Email
   * @format email
   * @maxLength 254
   */
  user_email?: string;
  /** Accepted */
  is_accepted?: boolean;
  /** @format date-time */
  accept_date?: string | null;
  /** @format date-time */
  expiry_date?: string | null;
  creator: number | null;
  suggest?: number | null;
}

export interface MyOrgInvite {
  readonly id: number;
  readonly is_rejected: boolean;
  is_service_center?: boolean;
  requisites: OrganizationRequisites;
  settings?: OrganizationSettings | null;
  readonly service_center: ServiceCenter;
  contact: Profile;
  profile: Profile;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 127 */
  name: string;
  /** @maxLength 125 */
  identifier: string;
  /** @maxLength 28 */
  identifier_kind?: string;
  /** Created as new */
  as_new?: boolean;
  /** Approved */
  is_approved?: boolean;
  /** @format date-time */
  verdict_date?: string | null;
  reject_message?: string;
  creator: number | null;
  organization: number | null;
}

export interface MyUserAll {
  readonly id: number;
  /**
   * Required. 120 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @maxLength 120
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  /**
   * Admin email
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * Staff status
   * Designates whether the user can log into this admin site.
   */
  is_staff?: boolean;
  /** @format date-time */
  last_login?: string | null;
  /** @format date-time */
  date_joined?: string;
  /** Activated */
  is_activated?: boolean;
  profile: DefaultProfile;
  readonly employments: MyEmployment[];
  readonly user_invites: MyInvite[];
  readonly org_invites: MyOrgInvite[];
}

export interface MyUserEmployment {
  readonly id: number;
  /**
   * Required. 120 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @maxLength 120
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  /**
   * Admin email
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * Staff status
   * Designates whether the user can log into this admin site.
   */
  is_staff?: boolean;
  /** @format date-time */
  last_login?: string | null;
  /** @format date-time */
  date_joined?: string;
  /** Activated */
  is_activated?: boolean;
  profile: DefaultProfile;
  readonly employments: MyEmployment[];
}

export interface MyUserInvite {
  readonly id: number;
  /**
   * Required. 120 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @maxLength 120
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  /**
   * Admin email
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * Staff status
   * Designates whether the user can log into this admin site.
   */
  is_staff?: boolean;
  /** @format date-time */
  last_login?: string | null;
  /** @format date-time */
  date_joined?: string;
  /** Activated */
  is_activated?: boolean;
  profile: DefaultProfile;
  readonly user_invites: MyInvite[];
  readonly org_invites: MyOrgInvite[];
}

export interface Notification {
  readonly id: number;
  readonly author: EmployeeDetailed;
  /** @format date-time */
  readonly created_at: string;
  /** @maxLength 255 */
  title: string;
  text: string;
  payload?: any;
  readonly organization: number | null;
}

export interface OrgWorkTask {
  readonly id: number;
  /**
   * * `draft` - draft
   * * `posted` - posted
   * * `reject` - reject
   * * `delete` - delete
   * * `archived` - archived
   */
  mark: WorkTaskMark;
  /**
   * * `search` - search
   * * `processing` - processing
   * * `approval` - approval
   * * `wait` - wait
   * * `on_way` - on_way
   * * `pause` - pause
   * * `work` - work
   * * `done` - done
   */
  status: StatusEnum;
  readonly service_center: OrganizationPublic;
  readonly vehicle: Vehicle;
  readonly executor: EmployeeDetailed;
  readonly coordinator: EmployeeDetailed;
  readonly approval: WorkTaskApproval;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  number: number;
  /** @maxLength 120 */
  title?: string;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  /** @format date-time */
  status_date?: string | null;
  /** @format date-time */
  mark_date?: string | null;
  organization: number;
  customer?: number | null;
  /** Parent task */
  parent?: number | null;
  assistants?: number[];
  involved?: number[];
}

export interface OrgWorkTaskEdit {
  /** @default "posted" */
  mark?: WorkTaskMark;
  /** @format date-time */
  mark_date?: string | null;
  approval: WorkTaskCustomerApproval;
  new_photos?: WorkTaskAttachment[];
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  service_center?: number | null;
  vehicle?: number | null;
  /** Parent task */
  parent?: number | null;
}

export interface Organization {
  readonly id: number;
  readonly is_service_center: boolean;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 127 */
  name: string;
  /** Active */
  is_active?: boolean;
  /**
   * Фото
   * @format uri
   */
  photo?: string;
  /**
   * @format uri
   * @maxLength 200
   */
  site?: string;
  about?: string;
  /** Organization requisites */
  requisites?: number | null;
  /** Organization contact */
  contact?: number | null;
}

export interface OrganizationCacheFile {
  readonly id: number;
  readonly is_personal: boolean;
  /** * `vehicle_catalog` - vehicle_catalog */
  key: KeyEnum;
  /** @format date-time */
  readonly updated_at: string;
  /** @format uri */
  file?: string;
  format_version?: number;
}

export interface OrganizationDetailed {
  readonly id: number;
  readonly is_service_center: boolean;
  readonly requisites: OrganizationRequisites;
  readonly settings: OrganizationSettings;
  readonly service_center: ServiceCenter;
  readonly contact: Profile;
  /** @format uri */
  photo?: string | null;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 127 */
  name: string;
  /** Active */
  readonly is_active: boolean;
  /**
   * @format uri
   * @maxLength 200
   */
  site?: string;
  about?: string;
}

export interface OrganizationInn {
  inn: string;
  readonly results: DaDataOrganization[];
}

export interface OrganizationInvite {
  readonly id: number;
  readonly is_rejected: boolean;
  is_service_center?: boolean;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 127 */
  name: string;
  /** @maxLength 125 */
  identifier: string;
  readonly identifier_kind: string;
  /** Created as new */
  readonly as_new: boolean;
  /** Approved */
  readonly is_approved: boolean;
  /** @format date-time */
  readonly verdict_date: string | null;
  readonly reject_message: string;
  readonly creator: number | null;
  /** Organization requisites */
  requisites?: number | null;
  profile?: number | null;
  /** Organization contact */
  contact?: number | null;
  /** Organization settings */
  settings?: number | null;
  service_center?: number | null;
  readonly organization: number | null;
}

export interface OrganizationInviteDetailed {
  readonly id: number;
  readonly is_rejected: boolean;
  is_service_center?: boolean;
  requisites: OrganizationRequisites;
  settings?: OrganizationSettings | null;
  readonly service_center: ServiceCenter;
  contact: Profile;
  profile: Profile;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 127 */
  name: string;
  /** @maxLength 125 */
  identifier: string;
  readonly identifier_kind: string;
  /** Created as new */
  readonly as_new: boolean;
  /** Approved */
  readonly is_approved: boolean;
  /** @format date-time */
  readonly verdict_date: string | null;
  reject_message?: string;
  readonly creator: number | null;
  readonly organization: number | null;
}

export interface OrganizationPublic {
  readonly id: number;
  readonly is_service_center: boolean;
  requisites: OrganizationRequisites;
  contact: Profile;
  /** @format uri */
  photo?: string | null;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 127 */
  name: string;
  /** Active */
  is_active?: boolean;
  /**
   * @format uri
   * @maxLength 200
   */
  site?: string;
  about?: string;
}

export interface OrganizationRequisites {
  readonly id: number;
  physical_address?: Address;
  legal_address?: Address;
  postal_address?: Address;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 255 */
  full_name: string;
  /** @maxLength 9 */
  kpp?: string;
  /** @maxLength 12 */
  inn?: string;
  /** @maxLength 15 */
  ogrn?: string;
  /**
   * Ogrn issue date
   * @format date
   */
  ogrn_date?: string | null;
}

export interface OrganizationSettings {
  readonly id: number;
  time_zone: string;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
}

export type PaginatedControlPointList = ControlPoint[];

export type PaginatedDeviceList = Device[];

export type PaginatedEmployeeDetailedWithRatingList = EmployeeDetailedWithRating[];

export type PaginatedNotificationList = Notification[];

export type PaginatedOrgWorkTaskList = OrgWorkTask[];

export type PaginatedOrganizationInviteList = OrganizationInvite[];

export type PaginatedOrganizationList = Organization[];

export type PaginatedOrganizationPublicList = OrganizationPublic[];

export type PaginatedReportList = Report[];

export type PaginatedSerVehicleList = SerVehicle[];

export type PaginatedSerWorkTaskList = SerWorkTask[];

export type PaginatedSerWorkTaskVerboseList = SerWorkTaskVerbose[];

export type PaginatedUserInviteList = UserInvite[];

export type PaginatedVehicleBrandList = VehicleBrand[];

export type PaginatedVehicleDocumentationDetailedList = VehicleDocumentationDetailed[];

export type PaginatedVehicleEquipmentList = VehicleEquipment[];

export type PaginatedVehicleList = Vehicle[];

export type PaginatedVehicleModelDetailedList = VehicleModelDetailed[];

export type PaginatedVehicleNoteList = VehicleNote[];

export type PaginatedVehiclePhotoDetailedList = VehiclePhotoDetailed[];

export type PaginatedVehicleRecommendationDetailedList = VehicleRecommendationDetailed[];

export type PaginatedVehicleRuntimeList = VehicleRuntime[];

export type PaginatedWorkEmployeeGeolocationList = WorkEmployeeGeolocation[];

export type PaginatedWorkEmployeeList = WorkEmployee[];

export type PaginatedWorkOrganizationList = WorkOrganization[];

export type PaginatedWorkReviewList = WorkReview[];

export type PaginatedWorkServiceCenterList = WorkServiceCenter[];

export type PaginatedWorkTaskAttachmentList = WorkTaskAttachment[];

export type PaginatedWorkTaskDetailedList = WorkTaskDetailed[];

export type PaginatedWorkTaskGeoList = WorkTaskGeo[];

export type PaginatedWorkTaskRouteList = WorkTaskRoute[];

export type PaginatedWorkTaskStatusChangeDetailedList = WorkTaskStatusChangeDetailed[];

export type PaginatedWorkVehicleList = WorkVehicle[];

export interface PatchedControlPoint {
  readonly id?: number;
  address?: Address | null;
  /** @format date-time */
  readonly created_at?: string;
  /** @format date-time */
  readonly updated_at?: string;
  /** @maxLength 127 */
  name?: string;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  /** Permanent */
  is_permanent?: boolean;
  readonly organization?: number;
}

export interface PatchedEmployeeDetailedWithRating {
  readonly id?: number;
  /**
   * * `server` - server
   * * `client` - client
   * * `engineer` - engineer
   * * `coordinator` - coordinator
   */
  role?: RoleEnum;
  readonly profile?: Profile;
  readonly rating?: EmployeeRating;
  /** @format date-time */
  readonly created_at?: string;
  /** @format date-time */
  readonly updated_at?: string;
  /** Active */
  is_active?: boolean;
  readonly organization?: number;
}

export interface PatchedOrgWorkTaskEdit {
  /** @default "posted" */
  mark?: WorkTaskMark;
  /** @format date-time */
  mark_date?: string | null;
  approval?: WorkTaskCustomerApproval;
  new_photos?: WorkTaskAttachment[];
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  service_center?: number | null;
  vehicle?: number | null;
  /** Parent task */
  parent?: number | null;
}

export interface PatchedOrganizationDetailed {
  readonly id?: number;
  readonly is_service_center?: boolean;
  readonly requisites?: OrganizationRequisites;
  readonly settings?: OrganizationSettings;
  readonly service_center?: ServiceCenter;
  readonly contact?: Profile;
  /** @format uri */
  photo?: string | null;
  /** @format date-time */
  readonly created_at?: string;
  /** @format date-time */
  readonly updated_at?: string;
  /** @maxLength 127 */
  name?: string;
  /** Active */
  readonly is_active?: boolean;
  /**
   * @format uri
   * @maxLength 200
   */
  site?: string;
  about?: string;
}

export interface PatchedOrganizationRequisites {
  readonly id?: number;
  physical_address?: Address;
  legal_address?: Address;
  postal_address?: Address;
  /** @format date-time */
  readonly created_at?: string;
  /** @format date-time */
  readonly updated_at?: string;
  /** @maxLength 255 */
  full_name?: string;
  /** @maxLength 9 */
  kpp?: string;
  /** @maxLength 12 */
  inn?: string;
  /** @maxLength 15 */
  ogrn?: string;
  /**
   * Ogrn issue date
   * @format date
   */
  ogrn_date?: string | null;
}

export interface PatchedOrganizationSettings {
  readonly id?: number;
  time_zone?: string;
  /** @format date-time */
  readonly created_at?: string;
  /** @format date-time */
  readonly updated_at?: string;
}

export interface PatchedProfile {
  readonly id?: number;
  /** @format uri */
  photo?: string | null;
  /** @format date-time */
  readonly created_at?: string;
  /** @format date-time */
  readonly updated_at?: string;
  /** @maxLength 120 */
  last_name?: string;
  /** @maxLength 120 */
  first_name?: string;
  /** @maxLength 120 */
  middle_name?: string;
  /**
   * Email address
   * @format email
   * @maxLength 254
   */
  email?: string;
  /** @maxLength 128 */
  phone_number?: string;
  /** @maxLength 120 */
  position?: string;
  /** @maxLength 120 */
  telegram?: string;
  /** @maxLength 120 */
  whatsapp?: string;
  /** @maxLength 120 */
  viber?: string;
}

export interface PatchedServiceCenter {
  readonly id?: number;
  readonly coverage_regions?: Region[];
  /** @format date-time */
  readonly created_at?: string;
  /** @format date-time */
  readonly updated_at?: string;
  /** Points radius */
  coverage_radius?: number[];
}

export interface PatchedUserPersonal {
  readonly id?: number;
  /** Required. 120 characters or fewer. Letters, digits and @/./+/-/_ only. */
  readonly username?: string;
  profile?: DefaultProfile;
  /**
   * Staff status
   * Designates whether the user can log into this admin site.
   */
  readonly is_staff?: boolean;
  /** @format date-time */
  readonly last_login?: string | null;
  /** @format date-time */
  readonly date_joined?: string;
  /** Activated */
  readonly is_activated?: boolean;
}

export interface PatchedVehicleBrand {
  readonly id?: number;
  /** @format uri */
  icon?: string | null;
  readonly is_public?: boolean;
  /** @format date-time */
  readonly created_at?: string;
  /** @format date-time */
  readonly updated_at?: string;
  /** @maxLength 126 */
  name?: string;
  /** @maxLength 510 */
  info?: string;
  /** @format double */
  order?: number;
  readonly organization?: number | null;
}

export interface PatchedVehicleEdit {
  readonly id?: number;
  readonly is_hidden?: boolean;
  /** @format date-time */
  readonly created_at?: string;
  /** @format date-time */
  readonly updated_at?: string;
  /**
   * Serial number
   * @maxLength 254
   */
  sn?: string;
  /** @maxLength 510 */
  info?: string;
  manufacture_date?: number | null;
  /** @maxLength 15 */
  gos_number?: string;
  /** @format double */
  order?: number;
  /** @format date-time */
  readonly hide_date?: string | null;
  /** Модель техники */
  model?: number;
  readonly organization?: number;
}

export interface PatchedVehicleModelDetailed {
  readonly id?: number;
  /** @format uri */
  icon?: string | null;
  readonly is_public?: boolean;
  readonly brand?: VehicleBrand;
  readonly equipment?: VehicleEquipment;
  /** @format date-time */
  readonly created_at?: string;
  /** @format date-time */
  readonly updated_at?: string;
  /** @maxLength 126 */
  name_prefix?: string;
  /** @maxLength 126 */
  name?: string;
  /** @maxLength 510 */
  info?: string;
  /** @format double */
  order?: number;
  readonly organization?: number | null;
}

export interface PatchedVehicleNote {
  readonly id?: number;
  readonly author?: EmployeeDetailed;
  /** @format date-time */
  readonly created_at?: string;
  /** @format date-time */
  readonly updated_at?: string;
  /** @maxLength 510 */
  text?: string;
  /** Personal */
  is_personal?: boolean;
  readonly vehicle?: number;
  readonly service_center?: number | null;
}

export interface PatchedVehiclePhotoUpdate {
  readonly id?: number;
  /**
   * * `info` - info
   * * `problem` - problem
   * * `recommendation` - recommendation
   */
  meaning?: MeaningEnum;
  /**
   * * `no` - no
   * * `posted` - posted
   * * `rejected` - rejected
   */
  verdict?: VehicleAdditionVerdict;
  readonly author?: EmployeeDetailed;
  readonly is_approved?: boolean;
  readonly is_rejected?: boolean;
  readonly auditor?: EmployeeDetailed;
  /** @format date-time */
  readonly created_at?: string;
  /** @format date-time */
  readonly updated_at?: string;
  /** @maxLength 120 */
  title?: string;
  /** @format uri */
  readonly file?: string;
  /** @format date-time */
  verdict_date?: string | null;
  /** @format uuid */
  client_uuid?: string | null;
  readonly vehicle?: number;
  readonly recommendation?: number | null;
}

export interface PatchedVehicleRecommendationDetailed {
  readonly id?: number;
  /**
   * * `info` - info
   * * `warning` - warning
   * * `critical` - critical
   */
  level?: LevelEnum;
  readonly executor_level?: ExecutorLevelEnum;
  /**
   * * `no` - no
   * * `complete` - complete
   */
  solution?: SolutionEnum;
  /**
   * * `no` - no
   * * `posted` - posted
   * * `rejected` - rejected
   */
  verdict?: VehicleAdditionVerdict;
  readonly author?: EmployeeDetailed;
  readonly is_approved?: boolean;
  readonly is_rejected?: boolean;
  readonly is_completed?: boolean;
  /** @format date-time */
  readonly complete_date?: string;
  readonly auditor?: EmployeeDetailed;
  /** @format date-time */
  readonly created_at?: string;
  /** @format date-time */
  readonly updated_at?: string;
  /** @maxLength 120 */
  title?: string;
  readonly executor_title?: string;
  /** @maxLength 510 */
  text?: string;
  /** @format date-time */
  solution_date?: string | null;
  /** @format date-time */
  verdict_date?: string | null;
  readonly vehicle?: number;
  readonly service_center?: number | null;
}

export interface PatchedVehicleRuntime {
  readonly id?: number;
  /** @default "posted" */
  verdict?: VehicleAdditionVerdict;
  readonly author?: EmployeeDetailed;
  readonly auditor?: EmployeeDetailed;
  /** @format date-time */
  readonly created_at?: string;
  /** @format date-time */
  readonly updated_at?: string;
  value?: number;
  /** @format date-time */
  verdict_date?: string | null;
  readonly vehicle?: number;
  readonly service_center?: number | null;
}

export interface PatchedWorkReview {
  readonly id?: number;
  /**
   * @min 0
   * @max 5
   */
  value?: number;
  /** @format date-time */
  readonly created_at?: string;
  /** @format date-time */
  readonly updated_at?: string;
  /** @maxLength 510 */
  text?: string;
  readonly task?: number;
  readonly author?: number | null;
  readonly recipient?: number | null;
}

export interface PatchedWorkTaskAttachment {
  readonly id?: number;
  /** @format uri */
  file?: string | null;
  /** @format date-time */
  readonly created_at?: string;
  /** @format date-time */
  readonly updated_at?: string;
  /** @maxLength 120 */
  title?: string;
  /** @format uuid */
  client_uuid?: string | null;
  readonly task?: number;
  readonly author?: number | null;
}

export interface PatchedWorkTaskEditResult {
  runtime?: VehicleRuntimeEditResult;
  recommendations?: VehicleRecommendationEditResult;
  photos?: WorkTaskAttachmentEditResult;
  /** @maxLength 510 */
  report?: string;
}

export interface PatchedWorkTaskExecutor {
  coordinator?: number | null;
  executor?: number | null;
  assistants?: any[] | null;
}

export interface PatchedWorkTaskMarkResult {
  /**
   * * `no` - no
   * * `rejected` - rejected
   * * `applied` - applied
   */
  customer_mark?: WorkTaskResultMark;
}

export interface PatchedWorkTaskMeCustomer {
  customer?: number | null;
}

export interface PatchedWorkTaskSaveResult {
  runtime?: VehicleRuntimeResult[];
  recommendations?: VehicleRecommendationResult[];
  photos?: WorkTaskAttachment[];
  /** @maxLength 510 */
  report?: string;
}

export interface PointRadius {
  /**
   * Longitude center
   * @format double
   */
  lon_center: number;
  /**
   * Latitude center
   * @format double
   */
  lat_center: number;
  /** @format double */
  radius?: number;
}

export interface Profile {
  readonly id: number;
  /** @format uri */
  photo?: string | null;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 120 */
  last_name?: string;
  /** @maxLength 120 */
  first_name?: string;
  /** @maxLength 120 */
  middle_name?: string;
  /**
   * Email address
   * @format email
   * @maxLength 254
   */
  email?: string;
  /** @maxLength 128 */
  phone_number?: string;
  /** @maxLength 120 */
  position?: string;
  /** @maxLength 120 */
  telegram?: string;
  /** @maxLength 120 */
  whatsapp?: string;
  /** @maxLength 120 */
  viber?: string;
}

/**
 * * `manual` - manual
 * * `openroute` - openroute
 * * `twogis` - twogis
 */
export enum ProviderEnum {
  Manual = "manual",
  Openroute = "openroute",
  Twogis = "twogis",
}

export interface Region {
  /**
   * Iso 3166
   * @maxLength 15
   */
  iso_3166_code?: string;
  /**
   * Code
   * @maxLength 15
   */
  local_code?: string;
  /**
   * Name
   * @maxLength 120
   */
  local_name?: string;
}

export interface Report {
  readonly id: number;
  /** @format date */
  period_start?: string | null;
  /** @format date */
  period_stop?: string | null;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /**
   * Файл
   * @format uri
   */
  readonly file: string;
  readonly service_center: number;
  readonly initiator: number | null;
}

/**
 * * `server` - server
 * * `client` - client
 * * `engineer` - engineer
 * * `coordinator` - coordinator
 */
export enum RoleEnum {
  Server = "server",
  Client = "client",
  Engineer = "engineer",
  Coordinator = "coordinator",
}

/**
 * * `no` - no
 * * `mh` - mh
 * * `km` - km
 * * `he` - he
 */
export enum RuntimeUnitEnum {
  No = "no",
  Mh = "mh",
  Km = "km",
  He = "he",
}

export interface SerVehicle {
  readonly id: number;
  readonly is_hidden: boolean;
  readonly summary: VehicleSummary;
  readonly model: VehicleModelDetailed;
  readonly name: string;
  readonly gost_number: string;
  readonly organization: OrganizationPublic;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /**
   * Serial number
   * @maxLength 254
   */
  sn?: string;
  /** @maxLength 510 */
  info?: string;
  manufacture_date?: number | null;
  /** @maxLength 15 */
  gos_number?: string;
  /** @format double */
  order?: number;
  /** @format date-time */
  readonly hide_date: string | null;
}

export interface SerWorkTask {
  readonly id: number;
  /**
   * * `draft` - draft
   * * `posted` - posted
   * * `reject` - reject
   * * `delete` - delete
   * * `archived` - archived
   */
  mark: WorkTaskMark;
  /**
   * * `search` - search
   * * `processing` - processing
   * * `approval` - approval
   * * `wait` - wait
   * * `on_way` - on_way
   * * `pause` - pause
   * * `work` - work
   * * `done` - done
   */
  status: StatusEnum;
  readonly organization: OrganizationPublic;
  readonly vehicle: Vehicle;
  readonly customer: EmployeeDetailed;
  readonly approval: WorkTaskApproval;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  number: number;
  /** @maxLength 120 */
  title?: string;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  /** @format date-time */
  status_date?: string | null;
  /** @format date-time */
  mark_date?: string | null;
  service_center?: number | null;
  coordinator?: number | null;
  readonly executor: number | null;
  /** Parent task */
  parent?: number | null;
  assistants?: number[];
  involved?: number[];
}

export interface SerWorkTaskEdit {
  /** @default "posted" */
  mark?: WorkTaskMark;
  /** @format date-time */
  mark_date?: string | null;
  approval: WorkTaskCoordinatorApproval;
  new_photos?: WorkTaskAttachment[];
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  readonly organization: number;
  vehicle: number | null;
  /** Parent task */
  parent?: number | null;
}

export interface SerWorkTaskVerbose {
  readonly id: number;
  /**
   * * `draft` - draft
   * * `posted` - posted
   * * `reject` - reject
   * * `delete` - delete
   * * `archived` - archived
   */
  mark: WorkTaskMark;
  /**
   * * `search` - search
   * * `processing` - processing
   * * `approval` - approval
   * * `wait` - wait
   * * `on_way` - on_way
   * * `pause` - pause
   * * `work` - work
   * * `done` - done
   */
  status: StatusEnum;
  readonly organization: OrganizationPublic;
  readonly vehicle: Vehicle;
  readonly approval: WorkTaskApproval;
  readonly customer: EmployeeDetailed;
  readonly executor: EmployeeDetailed;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  number: number;
  /** @maxLength 120 */
  title?: string;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  /** @format date-time */
  status_date?: string | null;
  /** @format date-time */
  mark_date?: string | null;
  readonly service_center: number | null;
  coordinator?: number | null;
  /** Parent task */
  parent?: number | null;
  assistants?: number[];
  involved?: number[];
}

export interface ServiceCenter {
  readonly id: number;
  readonly coverage_regions: Region[];
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** Points radius */
  coverage_radius?: number[];
}

/**
 * * `no` - no
 * * `complete` - complete
 */
export enum SolutionEnum {
  No = "no",
  Complete = "complete",
}

/**
 * * `user` - user
 * * `osm` - osm
 * * `dadata` - dadata
 * * `fias` - fias
 */
export enum SourceEnum {
  User = "user",
  Osm = "osm",
  Dadata = "dadata",
  Fias = "fias",
}

/**
 * * `prepare` - prepare
 * * `ready` - ready
 * * `rebuilt` - rebuilt
 * * `start` - start
 * * `stop` - stop
 * * `done` - done
 * * `cancel` - cancel
 */
export enum StateEnum {
  Prepare = "prepare",
  Ready = "ready",
  Rebuilt = "rebuilt",
  Start = "start",
  Stop = "stop",
  Done = "done",
  Cancel = "cancel",
}

/**
 * * `search` - search
 * * `processing` - processing
 * * `approval` - approval
 * * `wait` - wait
 * * `on_way` - on_way
 * * `pause` - pause
 * * `work` - work
 * * `done` - done
 */
export enum StatusEnum {
  Search = "search",
  Processing = "processing",
  Approval = "approval",
  Wait = "wait",
  OnWay = "on_way",
  Pause = "pause",
  Work = "work",
  Done = "done",
}

export interface TokenBlacklist {
  refresh: string;
}

export interface TokenObtainPairSerializerV2 {
  readonly access: string;
  readonly refresh: string;
  username: string;
  password: string;
}

export interface TokenRefresh {
  readonly access: string;
  refresh: string;
}

export interface TokenVerify {
  token: string;
}

export interface TotalVehicleSummaryPair {
  /** Runtime summary */
  runtime_sum?: number;
  r_info_count?: number;
  r_warning_count?: number;
  r_critical_count?: number;
  r_complete_count?: number;
  r_incomplete_count?: number;
  t_active_count?: number;
  t_total_count?: number;
}

/**
 * * `none` - none
 * * `db` - db
 * * `websocket` - websocket
 * * `email_app` - email_app
 * * `fcm_app` - fcm_app
 * * `fcm_web` - fcm_web
 * * `hpk_app` - hpk_app
 * * `apns_app` - apns_app
 * * `telegram` - telegram
 */
export enum TypeEnum {
  None = "none",
  Db = "db",
  Websocket = "websocket",
  EmailApp = "email_app",
  FcmApp = "fcm_app",
  FcmWeb = "fcm_web",
  HpkApp = "hpk_app",
  ApnsApp = "apns_app",
  Telegram = "telegram",
}

export interface UserAcceptInvite {
  readonly id: number;
  readonly is_expired: boolean;
  readonly is_accepted: boolean;
}

export interface UserActivation {
  readonly ok: string;
  uid: string;
  token: string;
  readonly refresh: string;
  readonly access: string;
}

export interface UserDeleteAccount {
  readonly ok: string;
  readonly uid: string;
}

export interface UserDeleteAccountConfirm {
  readonly ok: string;
  token: string;
}

export interface UserInvite {
  readonly id: number;
  readonly is_expired: boolean;
  /**
   * * `server` - server
   * * `client` - client
   * * `engineer` - engineer
   * * `coordinator` - coordinator
   */
  role: RoleEnum;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /**
   * Username
   * @maxLength 120
   */
  user_username?: string;
  /**
   * Email
   * @format email
   * @maxLength 254
   */
  user_email?: string;
  /** Accepted */
  readonly is_accepted: boolean;
  /** @format date-time */
  readonly accept_date: string | null;
  /** @format date-time */
  readonly expiry_date: string | null;
  readonly creator: number | null;
  readonly organization: number;
  profile: number | null;
  readonly suggest: number | null;
}

export interface UserInviteDetailed {
  readonly id: number;
  readonly is_expired: boolean;
  /**
   * * `server` - server
   * * `client` - client
   * * `engineer` - engineer
   * * `coordinator` - coordinator
   */
  role: RoleEnum;
  readonly organization: Organization;
  profile: Profile;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /**
   * Username
   * @maxLength 120
   */
  user_username?: string;
  /**
   * Email
   * @format email
   * @maxLength 254
   */
  user_email?: string;
  /** Accepted */
  readonly is_accepted: boolean;
  /** @format date-time */
  readonly accept_date: string | null;
  /** @format date-time */
  readonly expiry_date: string | null;
  readonly creator: number | null;
  readonly suggest: number | null;
}

export interface UserPersonal {
  readonly id: number;
  /** Required. 120 characters or fewer. Letters, digits and @/./+/-/_ only. */
  readonly username: string;
  profile: DefaultProfile;
  /**
   * Staff status
   * Designates whether the user can log into this admin site.
   */
  readonly is_staff: boolean;
  /** @format date-time */
  readonly last_login: string | null;
  /** @format date-time */
  readonly date_joined: string;
  /** Activated */
  readonly is_activated: boolean;
}

export interface UserResendActivation {
  readonly ok: string;
  username: string;
  readonly uid: string;
  /** @format email */
  email?: string;
}

export interface UserResetPassword {
  readonly ok: string;
  username: string;
  readonly uid: string;
}

export interface UserResetPasswordConfirm {
  readonly ok: string;
  uid: string;
  token: string;
  /** @maxLength 128 */
  new_password: string;
}

export interface Vehicle {
  readonly id: number;
  readonly is_hidden: boolean;
  readonly summary: VehicleSummary;
  readonly model: VehicleModelDetailed;
  readonly name: string;
  readonly gost_number: string;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /**
   * Serial number
   * @maxLength 254
   */
  sn?: string;
  /** @maxLength 510 */
  info?: string;
  manufacture_date?: number | null;
  /** @maxLength 15 */
  gos_number?: string;
  /** @format double */
  order?: number;
  /** @format date-time */
  readonly hide_date: string | null;
  readonly organization: number;
}

/**
 * * `no` - no
 * * `posted` - posted
 * * `rejected` - rejected
 */
export enum VehicleAdditionVerdict {
  No = "no",
  Posted = "posted",
  Rejected = "rejected",
}

export interface VehicleBrand {
  readonly id: number;
  /** @format uri */
  icon?: string | null;
  readonly is_public: boolean;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 126 */
  name: string;
  /** @maxLength 510 */
  info?: string;
  /** @format double */
  order?: number;
  readonly organization: number | null;
}

export interface VehicleDetailed {
  readonly id: number;
  readonly is_hidden: boolean;
  readonly summary: VehicleSummary;
  readonly model: VehicleModelDetailed;
  readonly name: string;
  readonly gost_number: string;
  readonly recommendations: VehicleRecommendationDetailed[];
  readonly organization: OrganizationPublic;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /**
   * Serial number
   * @maxLength 254
   */
  sn?: string;
  /** @maxLength 510 */
  info?: string;
  manufacture_date?: number | null;
  /** @maxLength 15 */
  gos_number?: string;
  /** @format double */
  order?: number;
  /** @format date-time */
  hide_date?: string | null;
}

export interface VehicleDocumentationDetailed {
  readonly id: number;
  /** @format uri */
  file: string;
  readonly is_public: boolean;
  readonly author: EmployeeDetailed;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 126 */
  title?: string;
  readonly model: number;
  readonly organization: number | null;
  /** Organization */
  readonly service_center: number | null;
}

export interface VehicleEdit {
  readonly id: number;
  readonly is_hidden: boolean;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /**
   * Serial number
   * @maxLength 254
   */
  sn?: string;
  /** @maxLength 510 */
  info?: string;
  manufacture_date?: number | null;
  /** @maxLength 15 */
  gos_number?: string;
  /** @format double */
  order?: number;
  /** @format date-time */
  readonly hide_date: string | null;
  /** Модель техники */
  model?: number;
  readonly organization: number;
}

export interface VehicleEquipment {
  readonly id: number;
  /** @maxLength 126 */
  name: string;
  /** @format uri */
  icon?: string;
  /**
   * * `no` - no
   * * `mh` - mh
   * * `km` - km
   * * `he` - he
   */
  runtime_unit: RuntimeUnitEnum;
}

export interface VehicleModel {
  readonly id: number;
  /** @format uri */
  icon?: string | null;
  readonly is_public: boolean;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 126 */
  name_prefix?: string;
  /** @maxLength 126 */
  name: string;
  /** @maxLength 510 */
  info?: string;
  /** @format double */
  order?: number;
  brand: number;
  readonly organization: number | null;
  equipment?: number;
}

export interface VehicleModelDetailed {
  readonly id: number;
  /** @format uri */
  icon?: string | null;
  readonly is_public: boolean;
  readonly brand: VehicleBrand;
  readonly equipment: VehicleEquipment;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 126 */
  name_prefix?: string;
  /** @maxLength 126 */
  name: string;
  /** @maxLength 510 */
  info?: string;
  /** @format double */
  order?: number;
  readonly organization: number | null;
}

export interface VehicleNote {
  readonly id: number;
  readonly author: EmployeeDetailed;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 510 */
  text?: string;
  /** Personal */
  is_personal?: boolean;
  readonly vehicle: number;
  readonly service_center: number | null;
}

export interface VehiclePhotoDetailed {
  readonly id: number;
  /**
   * * `info` - info
   * * `problem` - problem
   * * `recommendation` - recommendation
   */
  meaning: MeaningEnum;
  /**
   * * `no` - no
   * * `posted` - posted
   * * `rejected` - rejected
   */
  verdict: VehicleAdditionVerdict;
  /** @format uri */
  file?: string | null;
  readonly author: EmployeeDetailed;
  readonly is_approved: boolean;
  readonly is_rejected: boolean;
  readonly auditor: EmployeeDetailed;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 120 */
  title?: string;
  /** @format date-time */
  verdict_date?: string | null;
  /** @format uuid */
  client_uuid?: string | null;
  readonly vehicle: number;
  readonly recommendation: number | null;
}

export interface VehiclePhotoUpdate {
  readonly id: number;
  /**
   * * `info` - info
   * * `problem` - problem
   * * `recommendation` - recommendation
   */
  meaning: MeaningEnum;
  /**
   * * `no` - no
   * * `posted` - posted
   * * `rejected` - rejected
   */
  verdict: VehicleAdditionVerdict;
  readonly author: EmployeeDetailed;
  readonly is_approved: boolean;
  readonly is_rejected: boolean;
  readonly auditor: EmployeeDetailed;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 120 */
  title?: string;
  /** @format uri */
  readonly file: string;
  /** @format date-time */
  verdict_date?: string | null;
  /** @format uuid */
  client_uuid?: string | null;
  readonly vehicle: number;
  readonly recommendation: number | null;
}

export interface VehicleRecommendation {
  readonly id: number;
  /**
   * * `info` - info
   * * `warning` - warning
   * * `critical` - critical
   */
  level: LevelEnum;
  readonly executor_level: ExecutorLevelEnum;
  /**
   * * `no` - no
   * * `complete` - complete
   */
  solution: SolutionEnum;
  /**
   * * `no` - no
   * * `posted` - posted
   * * `rejected` - rejected
   */
  verdict: VehicleAdditionVerdict;
  readonly author: EmployeeDetailed;
  readonly is_approved: boolean;
  readonly is_rejected: boolean;
  readonly is_completed: boolean;
  /** @format date-time */
  readonly complete_date: string;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 120 */
  title?: string;
  readonly executor_title: string;
  /** @maxLength 510 */
  text?: string;
  /** @format date-time */
  solution_date?: string | null;
  /** @format date-time */
  verdict_date?: string | null;
  readonly vehicle: number;
  readonly service_center: number | null;
  readonly auditor: number | null;
}

export interface VehicleRecommendationDetailed {
  readonly id: number;
  /**
   * * `info` - info
   * * `warning` - warning
   * * `critical` - critical
   */
  level: LevelEnum;
  readonly executor_level: ExecutorLevelEnum;
  /**
   * * `no` - no
   * * `complete` - complete
   */
  solution: SolutionEnum;
  /**
   * * `no` - no
   * * `posted` - posted
   * * `rejected` - rejected
   */
  verdict: VehicleAdditionVerdict;
  readonly author: EmployeeDetailed;
  readonly is_approved: boolean;
  readonly is_rejected: boolean;
  readonly is_completed: boolean;
  /** @format date-time */
  readonly complete_date: string;
  readonly auditor: EmployeeDetailed;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 120 */
  title?: string;
  readonly executor_title: string;
  /** @maxLength 510 */
  text?: string;
  /** @format date-time */
  solution_date?: string | null;
  /** @format date-time */
  verdict_date?: string | null;
  readonly vehicle: number;
  readonly service_center: number | null;
}

export interface VehicleRecommendationEditResult {
  new?: VehicleRecommendationResult[];
  edit?: Record<string, VehicleRecommendationResult>;
  remove?: number[];
}

export interface VehicleRecommendationResult {
  /** @maxLength 120 */
  title?: string;
  /** @maxLength 510 */
  text?: string;
  /**
   * * `info` - info
   * * `warning` - warning
   * * `critical` - critical
   */
  level: LevelEnum;
  readonly executor_level: ExecutorLevelEnum;
  readonly executor_title: string;
}

export interface VehicleRuntime {
  readonly id: number;
  /** @default "posted" */
  verdict?: VehicleAdditionVerdict;
  readonly author: EmployeeDetailed;
  readonly auditor: EmployeeDetailed;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  value: number;
  /** @format date-time */
  verdict_date?: string | null;
  readonly vehicle: number;
  readonly service_center: number | null;
}

export interface VehicleRuntimeEditResult {
  new?: VehicleRuntimeResult[];
  edit?: Record<string, VehicleRuntimeResult>;
  remove?: number[];
}

export interface VehicleRuntimeResult {
  value: number;
}

export interface VehicleSummary {
  /** Runtime summary */
  runtime_sum?: number;
  r_info_count?: number;
  r_warning_count?: number;
  r_critical_count?: number;
  r_complete_count?: number;
  r_incomplete_count?: number;
  t_active_count?: number;
  t_total_count?: number;
}

export interface WorkEmployee {
  readonly id: number;
  /**
   * * `server` - server
   * * `client` - client
   * * `engineer` - engineer
   * * `coordinator` - coordinator
   */
  role: RoleEnum;
  readonly profile: Profile;
  readonly tasks: WorkTaskShort[];
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** Owner */
  is_owner?: boolean;
  /** Active */
  is_active?: boolean;
  readonly organization: number;
}

export interface WorkEmployeeGeolocation {
  /**
   * Longitude
   * @format double
   */
  lon: number;
  /**
   * Latitude
   * @format double
   */
  lat: number;
  /** @format date-time */
  real_date: string;
  device?: number | null;
  task?: number | null;
  /** @format uuid */
  route?: string | null;
}

export interface WorkOrganization {
  readonly id: number;
  readonly is_service_center: boolean;
  requisites: OrganizationRequisites;
  contact: Profile;
  /** @format uri */
  photo?: string | null;
  readonly tasks: WorkTaskShort[];
  readonly summaries: TotalVehicleSummaryPair[];
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 127 */
  name: string;
  /** Active */
  is_active?: boolean;
  /**
   * @format uri
   * @maxLength 200
   */
  site?: string;
  about?: string;
}

export interface WorkReview {
  readonly id: number;
  /**
   * @min 0
   * @max 5
   */
  value: number;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 510 */
  text: string;
  readonly task: number;
  readonly author: number | null;
  readonly recipient: number | null;
}

export interface WorkServiceCenter {
  readonly id: number;
  readonly is_service_center: boolean;
  requisites: OrganizationRequisites;
  contact: Profile;
  /** @format uri */
  photo?: string | null;
  readonly summaries: TotalVehicleSummaryPair[];
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 127 */
  name: string;
  /** Active */
  is_active?: boolean;
  /**
   * @format uri
   * @maxLength 200
   */
  site?: string;
  about?: string;
}

export interface WorkServiceCenterSearch {
  readonly service_centers: WorkServiceCenter[];
  region?: Region;
  radius?: PointRadius;
}

export interface WorkTaskApproval {
  readonly id: number;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 510 */
  customer_description?: string;
  /** @maxLength 510 */
  coordinator_description?: string;
  /** @maxLength 510 */
  executor_note?: string;
  /** @format date-time */
  customer_approve_date?: string | null;
  /** @format date-time */
  coordinator_approve_date?: string | null;
  /** @format date-time */
  executor_approve_date?: string | null;
  /** @format date-time */
  want_start_date?: string | null;
  /** @format date-time */
  plan_start_date?: string | null;
  /** @format date-time */
  fact_start_date?: string | null;
  /** @format date-time */
  want_complete_date?: string | null;
  /** @format date-time */
  plan_complete_date?: string | null;
  /** @format date-time */
  fact_complete_date?: string | null;
  /** @format date-time */
  reject_date?: string | null;
  /** @maxLength 510 */
  reject_text?: string;
  readonly reject_initiator: number | null;
}

export interface WorkTaskAttachment {
  readonly id: number;
  /** @format uri */
  file?: string | null;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /** @maxLength 120 */
  title?: string;
  /** @format uuid */
  client_uuid?: string | null;
  readonly task: number;
  readonly author: number | null;
}

export interface WorkTaskAttachmentEditResult {
  new?: WorkTaskAttachment[];
  edit?: Record<string, WorkTaskAttachment>;
  remove?: number[];
}

export interface WorkTaskAttachmentShort {
  readonly id: number;
  /** @format uuid */
  client_uuid?: string | null;
}

export interface WorkTaskCheckGeo {
  readonly id: number;
  executor_mark?: boolean;
  control_point: ControlPoint;
}

export interface WorkTaskCoordinatorApproval {
  /** @maxLength 510 */
  coordinator_description?: string;
  /** @format date-time */
  coordinator_approve_date?: string | null;
  /** @format date-time */
  plan_start_date?: string | null;
  /** @format date-time */
  plan_complete_date?: string | null;
}

export interface WorkTaskCustomerApproval {
  /** @maxLength 510 */
  customer_description?: string;
  /** @format date-time */
  customer_approve_date?: string | null;
  /** @format date-time */
  want_start_date?: string | null;
  /** @format date-time */
  want_complete_date?: string | null;
}

export interface WorkTaskDetailed {
  readonly id: number;
  /**
   * * `draft` - draft
   * * `posted` - posted
   * * `reject` - reject
   * * `delete` - delete
   * * `archived` - archived
   */
  mark: WorkTaskMark;
  /**
   * * `search` - search
   * * `processing` - processing
   * * `approval` - approval
   * * `wait` - wait
   * * `on_way` - on_way
   * * `pause` - pause
   * * `work` - work
   * * `done` - done
   */
  status: StatusEnum;
  readonly service_center: OrganizationPublic;
  readonly organization: OrganizationPublic;
  readonly vehicle: Vehicle;
  readonly approval: WorkTaskApproval;
  readonly customer: EmployeeDetailed;
  readonly coordinator: EmployeeDetailed;
  readonly executor: EmployeeDetailed;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  number: number;
  /** @maxLength 120 */
  title?: string;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  /** @format date-time */
  status_date?: string | null;
  /** @format date-time */
  mark_date?: string | null;
  /** Parent task */
  parent?: number | null;
  assistants?: number[];
  involved?: number[];
}

/**
 * * `discuss` - discuss
 * * `rejected` - rejected
 * * `applied` - applied
 * * `removed` - removed
 */
export enum WorkTaskEventVerdict {
  Discuss = "discuss",
  Rejected = "rejected",
  Applied = "applied",
  Removed = "removed",
}

export interface WorkTaskGeo {
  readonly id: number;
  status_changes: WorkTaskStatusChangeGeo[];
  checklist: WorkTaskCheckGeo[];
  routes: WorkTaskRoute[];
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  readonly executor: EmployeeGeo;
}

/**
 * * `draft` - draft
 * * `posted` - posted
 * * `reject` - reject
 * * `delete` - delete
 * * `archived` - archived
 */
export enum WorkTaskMark {
  Draft = "draft",
  Posted = "posted",
  Reject = "reject",
  Delete = "delete",
  Archived = "archived",
}

export interface WorkTaskResult {
  readonly recommendations: VehicleRecommendation[];
  readonly runtime: VehicleRuntime[];
  readonly photos: WorkTaskAttachmentShort[];
  /** @maxLength 510 */
  executor_report?: string;
  /**
   * Executor report
   * @maxLength 510
   */
  coordinator_report?: string;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  check_date?: string | null;
  /** @format date-time */
  posted_date?: string | null;
  /** @format date-time */
  customer_mark_date?: string | null;
  readonly customer_mark: string;
  /** @format date-time */
  readonly updated_at: string;
}

/**
 * * `no` - no
 * * `rejected` - rejected
 * * `applied` - applied
 */
export enum WorkTaskResultMark {
  No = "no",
  Rejected = "rejected",
  Applied = "applied",
}

export interface WorkTaskRoute {
  /** @format uuid */
  readonly uuid: string;
  readonly provider: ProviderEnum;
  readonly state: StateEnum;
  readonly points: WorkTaskRoutePoint[];
  readonly geolocation: EmployeeGeolocation[];
  start: WorkTaskRoutePoint;
  stops: WorkTaskRoutePoint[];
  end: WorkTaskRoutePoint;
  readonly duration: number;
  readonly length: number;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  readonly employee: number;
  readonly task: number;
}

export interface WorkTaskRoutePoint {
  /**
   * Longitude
   * @format double
   */
  lon: number;
  /**
   * Latitude
   * @format double
   */
  lat: number;
}

export interface WorkTaskShort {
  readonly id: number;
  /**
   * * `draft` - draft
   * * `posted` - posted
   * * `reject` - reject
   * * `delete` - delete
   * * `archived` - archived
   */
  mark: WorkTaskMark;
  /**
   * * `search` - search
   * * `processing` - processing
   * * `approval` - approval
   * * `wait` - wait
   * * `on_way` - on_way
   * * `pause` - pause
   * * `work` - work
   * * `done` - done
   */
  status: StatusEnum;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  number: number;
  /** @maxLength 120 */
  title?: string;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  /** @format date-time */
  status_date?: string | null;
  /** @format date-time */
  mark_date?: string | null;
  organization: number;
  customer?: number | null;
  coordinator?: number | null;
  readonly executor: number | null;
  assistants?: number[];
  involved?: number[];
}

export interface WorkTaskShortWithExecutor {
  readonly id: number;
  /**
   * * `draft` - draft
   * * `posted` - posted
   * * `reject` - reject
   * * `delete` - delete
   * * `archived` - archived
   */
  mark: WorkTaskMark;
  /**
   * * `search` - search
   * * `processing` - processing
   * * `approval` - approval
   * * `wait` - wait
   * * `on_way` - on_way
   * * `pause` - pause
   * * `work` - work
   * * `done` - done
   */
  status: StatusEnum;
  readonly executor: EmployeeDetailed;
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  number: number;
  /** @maxLength 120 */
  title?: string;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  /** @format date-time */
  status_date?: string | null;
  /** @format date-time */
  mark_date?: string | null;
  organization: number;
  customer?: number | null;
  coordinator?: number | null;
  assistants?: number[];
  involved?: number[];
}

export interface WorkTaskStatusChangeButton {
  readonly name: string;
  readonly active: boolean;
}

export interface WorkTaskStatusChangeDetailed {
  /** @format uuid */
  readonly uuid: string;
  /**
   * * `search` - search
   * * `processing` - processing
   * * `approval` - approval
   * * `wait` - wait
   * * `on_way` - on_way
   * * `pause` - pause
   * * `work` - work
   * * `done` - done
   */
  status: StatusEnum;
  /**
   * * `discuss` - discuss
   * * `rejected` - rejected
   * * `applied` - applied
   * * `removed` - removed
   */
  verdict: WorkTaskEventVerdict;
  readonly initiator: EmployeeDetailed;
  readonly buttons: WorkTaskStatusChangeButton[];
  /** @format date-time */
  real_date?: string | null;
  /** @format uuid */
  message_uuid?: string | null;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
  /** @format date-time */
  verdict_date?: string | null;
  readonly edits: any;
}

export interface WorkTaskStatusChangeGeo {
  /** @format uuid */
  readonly uuid: string;
  /**
   * * `search` - search
   * * `processing` - processing
   * * `approval` - approval
   * * `wait` - wait
   * * `on_way` - on_way
   * * `pause` - pause
   * * `work` - work
   * * `done` - done
   */
  status: StatusEnum;
  /**
   * * `discuss` - discuss
   * * `rejected` - rejected
   * * `applied` - applied
   * * `removed` - removed
   */
  verdict: WorkTaskEventVerdict;
  /** @format date-time */
  verdict_date?: string | null;
  /** @format double */
  longitude?: number;
  /** @format double */
  latitude?: number;
}

export interface WorkVehicle {
  readonly id: number;
  readonly is_hidden: boolean;
  readonly summary: VehicleSummary;
  readonly model: VehicleModelDetailed;
  readonly name: string;
  readonly gost_number: string;
  readonly tasks: WorkTaskShortWithExecutor[];
  /** @format date-time */
  readonly created_at: string;
  /** @format date-time */
  readonly updated_at: string;
  /**
   * Serial number
   * @maxLength 254
   */
  sn?: string;
  /** @maxLength 510 */
  info?: string;
  manufacture_date?: number | null;
  /** @maxLength 15 */
  gos_number?: string;
  /** @format double */
  order?: number;
  /** @format date-time */
  hide_date?: string | null;
  readonly organization: number;
}

export type AccountActionsActivationCreateData = UserActivation;

export type AccountActionsRegistrationCreateData = AccountRegistration;

export type AccountActionsResendActivationCreateData = UserResendActivation;

export type AccountActionsResetPasswordCreateData = UserResetPassword;

export type AccountActionsResetPasswordConfirmCreateData = UserResetPasswordConfirm;

export interface AccountDeviceListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
}

export type AccountDeviceListData = PaginatedDeviceList;

export type AccountDeviceCreateData = Device;

export type AccountDeviceDestroyData = any;

export type AccountJwtBlacklistCreateData = TokenBlacklist;

export type AccountJwtBlacklistCookieCreateData = any;

export type AccountJwtCreateCreateData = TokenObtainPairSerializerV2;

export type AccountJwtCreateCookieCreateData = TokenObtainPairSerializerV2;

export type AccountJwtRefreshCreateData = TokenRefresh;

export type AccountJwtRefreshCookieCreateData = CookieTokenRefresh;

export type AccountJwtVerifyCreateData = TokenVerify;

export type AccountMeRetrieveData = UserPersonal;

export type AccountMePartialUpdateData = UserPersonal;

export type AccountMeAccountRegistrationRetryCreateData = AccountRegistrationRetry;

export type AccountMeDeleteAccountCreateData = UserDeleteAccount;

export type AccountMeDeleteAccountConfirmCreateData = UserDeleteAccountConfirm;

export interface ExportSersReportsListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type ExportSersReportsListData = PaginatedReportList;

export type ExportSersReportsCreateData = Report;

export type ExportSersReportsRetrieveData = Report;

export type ExportSersReportsDestroyData = any;

export type OrgMyRetrieveData = MyUserAll;

export type OrgMyEmploymentsRetrieveData = MyUserEmployment;

export type OrgMyInvitesRetrieveData = MyUserInvite;

export interface OrgNotificationListParams {
  author?: number;
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
  organization?: number;
  title?: string;
}

export type OrgNotificationListData = PaginatedNotificationList;

export type OrgNotificationRetrieveData = Notification;

export interface OrgOrgsListParams {
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
}

export type OrgOrgsListData = PaginatedOrganizationList;

export interface OrgOrgsInvitesListParams {
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
}

export type OrgOrgsInvitesListData = PaginatedOrganizationInviteList;

export type OrgOrgsInvitesCreateData = OrganizationInviteDetailed;

export type OrgOrgsInvitesRetrieveData = OrganizationInviteDetailed;

export type OrgOrgsInvitesDestroyData = any;

export type OrgOrgsInvitesInnCreateData = OrganizationInn;

export type OrgOrgsContactPartialUpdateData = Profile;

export interface OrgOrgsEmployeesListParams {
  is_active?: boolean;
  is_owner?: boolean;
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  profile?: number;
  /**
   * * `server` - server
   * * `client` - client
   * * `engineer` - engineer
   * * `coordinator` - coordinator
   */
  role?: "client" | "coordinator" | "engineer" | "server";
  user?: number;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type OrgOrgsEmployeesListData = PaginatedEmployeeDetailedWithRatingList;

export type OrgOrgsEmployeesCreateData = EmployeeDetailedWithRating;

export type OrgOrgsEmployeesRetrieveData = EmployeeDetailedWithRating;

export type OrgOrgsEmployeesPartialUpdateData = EmployeeDetailedWithRating;

export type OrgOrgsEmployeesDestroyData = any;

export type OrgOrgsMyProfileRetrieveData = Profile;

export type OrgOrgsMyProfilePartialUpdateData = Profile;

export interface OrgOrgsPointsListParams {
  is_permanent?: boolean;
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type OrgOrgsPointsListData = PaginatedControlPointList;

export type OrgOrgsPointsCreateData = ControlPoint;

export type OrgOrgsPointsRetrieveData = ControlPoint;

export type OrgOrgsPointsPartialUpdateData = ControlPoint;

export type OrgOrgsPointsDestroyData = any;

export interface OrgOrgsRelatedSersListParams {
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type OrgOrgsRelatedSersListData = PaginatedOrganizationPublicList;

export type OrgOrgsRelatedSersRetrieveData = OrganizationPublic;

export interface OrgOrgsRelatedSersEmployeesListParams {
  is_active?: boolean;
  is_owner?: boolean;
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  profile?: number;
  /**
   * * `server` - server
   * * `client` - client
   * * `engineer` - engineer
   * * `coordinator` - coordinator
   */
  role?: "client" | "coordinator" | "engineer" | "server";
  user?: number;
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  relatedId: string;
}

export type OrgOrgsRelatedSersEmployeesListData = PaginatedEmployeeDetailedWithRatingList;

export type OrgOrgsRelatedSersEmployeesRetrieveData = EmployeeDetailedWithRating;

export type OrgOrgsRequisitesPartialUpdateData = OrganizationRequisites;

export type OrgOrgsServiceCenterPartialUpdateData = ServiceCenter;

export type OrgOrgsSettingsPartialUpdateData = OrganizationSettings;

export interface OrgOrgsUserInvitesListParams {
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type OrgOrgsUserInvitesListData = PaginatedUserInviteList;

export type OrgOrgsUserInvitesCreateData = UserInviteDetailed;

export type OrgOrgsUserInvitesRetrieveData = UserInviteDetailed;

export type OrgOrgsUserInvitesDestroyData = any;

export type OrgOrgsUserInvitesAcceptCreateData = UserAcceptInvite;

export type OrgOrgsRetrieveData = OrganizationDetailed;

export type OrgOrgsPartialUpdateData = OrganizationDetailed;

export interface OrgSersRelatedOrgsListParams {
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type OrgSersRelatedOrgsListData = PaginatedOrganizationPublicList;

export type OrgSersRelatedOrgsRetrieveData = OrganizationPublic;

export interface OrgSersRelatedOrgsEmployeesListParams {
  is_active?: boolean;
  is_owner?: boolean;
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  profile?: number;
  /**
   * * `server` - server
   * * `client` - client
   * * `engineer` - engineer
   * * `coordinator` - coordinator
   */
  role?: "client" | "coordinator" | "engineer" | "server";
  user?: number;
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  relatedId: string;
}

export type OrgSersRelatedOrgsEmployeesListData = PaginatedEmployeeDetailedWithRatingList;

export type OrgSersRelatedOrgsEmployeesRetrieveData = EmployeeDetailedWithRating;

export interface VehicleOrgsBrandsListParams {
  equipment?: string;
  equipment_name?: string;
  /** Number of results to return per page. */
  limit?: number;
  name?: string;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type VehicleOrgsBrandsListData = PaginatedVehicleBrandList;

export type VehicleOrgsBrandsCreateData = VehicleBrand;

export type VehicleOrgsBrandsRetrieveData = VehicleBrand;

export type VehicleOrgsBrandsPartialUpdateData = VehicleBrand;

export type VehicleOrgsBrandsDestroyData = any;

export type VehicleOrgsCatalogCacheRetrieveData = OrganizationCacheFile;

export interface VehicleOrgsEquipmentListParams {
  brand?: number;
  brand_name?: string;
  /** Number of results to return per page. */
  limit?: number;
  name?: string;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type VehicleOrgsEquipmentListData = PaginatedVehicleEquipmentList;

export interface VehicleOrgsModelsListParams {
  brand?: number;
  /** Number of results to return per page. */
  limit?: number;
  name?: string;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type VehicleOrgsModelsListData = PaginatedVehicleModelDetailedList;

export type VehicleOrgsModelsCreateData = VehicleModel;

export type VehicleOrgsModelsRetrieveData = VehicleModelDetailed;

export type VehicleOrgsModelsPartialUpdateData = VehicleModelDetailed;

export type VehicleOrgsModelsDestroyData = any;

export interface VehicleOrgsVehiclesListParams {
  /** Multiple values may be separated by commas. */
  brand?: string[];
  brand_name?: string;
  /** Multiple values may be separated by commas. */
  equipment?: string[];
  equipment_name?: string;
  /** Number of results to return per page. */
  limit?: number;
  /** Multiple values may be separated by commas. */
  model?: string[];
  model_name?: string;
  name?: string;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   * * `order` - Order
   * * `-order` - Order (descending)
   * * `task_status` - Task status
   * * `-task_status` - Task status (descending)
   * * `task_executor_name` - Task executor name
   * * `-task_executor_name` - Task executor name (descending)
   * * `runtime` - Runtime
   * * `-runtime` - Runtime (descending)
   * * `model_name` - Model name
   * * `-model_name` - Model name (descending)
   * * `brand_name` - Brand name
   * * `-brand_name` - Brand name (descending)
   * * `organization_address_region` - Organization address region
   * * `-organization_address_region` - Organization address region (descending)
   * * `organization_address` - Organization address
   * * `-organization_address` - Organization address (descending)
   * * `organization_name` - Organization name
   * * `-organization_name` - Organization name (descending)
   */
  o?: (
    | "-brand_name"
    | "-created_at"
    | "-model_name"
    | "-order"
    | "-organization_address"
    | "-organization_address_region"
    | "-organization_name"
    | "-runtime"
    | "-task_executor_name"
    | "-task_status"
    | "-updated_at"
    | "brand_name"
    | "created_at"
    | "model_name"
    | "order"
    | "organization_address"
    | "organization_address_region"
    | "organization_name"
    | "runtime"
    | "task_executor_name"
    | "task_status"
    | "updated_at"
  )[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** Multiple values may be separated by commas. */
  organization?: string[];
  organization_address?: string;
  organization_address_district?: string;
  organization_address_region?: string;
  organization_name?: string;
  runtime_gte?: number;
  runtime_lte?: number;
  /** Multiple values may be separated by commas. */
  service_center?: string[];
  sn?: string;
  task_executor_name?: string;
  task_title?: string;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type VehicleOrgsVehiclesListData = PaginatedVehicleList;

export type VehicleOrgsVehiclesCreateData = VehicleEdit;

export type VehicleOrgsVehiclesRetrieveData = VehicleDetailed;

export type VehicleOrgsVehiclesPartialUpdateData = VehicleEdit;

export type VehicleOrgsVehiclesDestroyData = any;

export interface VehicleOrgsVehiclesDocsListParams {
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  vehicleId: string;
}

export type VehicleOrgsVehiclesDocsListData = PaginatedVehicleDocumentationDetailedList;

export type VehicleOrgsVehiclesDocsCreateData = VehicleDocumentationDetailed;

export type VehicleOrgsVehiclesDocsRetrieveData = VehicleDocumentationDetailed;

export type VehicleOrgsVehiclesDocsDestroyData = any;

export interface VehicleOrgsVehiclesPhotosListParams {
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  vehicleId: string;
}

export type VehicleOrgsVehiclesPhotosListData = PaginatedVehiclePhotoDetailedList;

export type VehicleOrgsVehiclesPhotosCreateData = VehiclePhotoDetailed;

export type VehicleOrgsVehiclesPhotosRetrieveData = VehiclePhotoDetailed;

export type VehicleOrgsVehiclesPhotosPartialUpdateData = VehiclePhotoUpdate;

export type VehicleOrgsVehiclesPhotosDestroyData = any;

export interface VehicleOrgsVehiclesRecsListParams {
  /** Multiple values may be separated by commas. */
  author?: string[];
  /**
   * Multiple values may be separated by commas.
   *
   * * `info` - info
   * * `warning` - warning
   * * `critical` - critical
   */
  level?: ("critical" | "info" | "warning")[];
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** Multiple values may be separated by commas. */
  organization?: string[];
  /** Multiple values may be separated by commas. */
  service_center?: string[];
  /**
   * Multiple values may be separated by commas.
   *
   * * `no` - no
   * * `complete` - complete
   */
  solution?: ("complete" | "no")[];
  title?: string;
  /**
   * Multiple values may be separated by commas.
   *
   * * `no` - no
   * * `posted` - posted
   * * `rejected` - rejected
   */
  verdict?: ("no" | "posted" | "rejected")[];
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  vehicleId: string;
}

export type VehicleOrgsVehiclesRecsListData = PaginatedVehicleRecommendationDetailedList;

export type VehicleOrgsVehiclesRecsRetrieveData = VehicleRecommendationDetailed;

export interface VehicleOrgsVehiclesRuntimeListParams {
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  service_center?: number;
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  vehicleId: string;
}

export type VehicleOrgsVehiclesRuntimeListData = PaginatedVehicleRuntimeList;

export type VehicleOrgsVehiclesRuntimeRetrieveData = VehicleRuntime;

export interface VehicleSersRelatedOrgsVehiclesListParams {
  /** Multiple values may be separated by commas. */
  brand?: string[];
  brand_name?: string;
  /** Multiple values may be separated by commas. */
  equipment?: string[];
  equipment_name?: string;
  /** Number of results to return per page. */
  limit?: number;
  /** Multiple values may be separated by commas. */
  model?: string[];
  model_name?: string;
  name?: string;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   * * `order` - Order
   * * `-order` - Order (descending)
   * * `task_status` - Task status
   * * `-task_status` - Task status (descending)
   * * `task_executor_name` - Task executor name
   * * `-task_executor_name` - Task executor name (descending)
   * * `runtime` - Runtime
   * * `-runtime` - Runtime (descending)
   * * `model_name` - Model name
   * * `-model_name` - Model name (descending)
   * * `brand_name` - Brand name
   * * `-brand_name` - Brand name (descending)
   * * `organization_address_region` - Organization address region
   * * `-organization_address_region` - Organization address region (descending)
   * * `organization_address` - Organization address
   * * `-organization_address` - Organization address (descending)
   * * `organization_name` - Organization name
   * * `-organization_name` - Organization name (descending)
   */
  o?: (
    | "-brand_name"
    | "-created_at"
    | "-model_name"
    | "-order"
    | "-organization_address"
    | "-organization_address_region"
    | "-organization_name"
    | "-runtime"
    | "-task_executor_name"
    | "-task_status"
    | "-updated_at"
    | "brand_name"
    | "created_at"
    | "model_name"
    | "order"
    | "organization_address"
    | "organization_address_region"
    | "organization_name"
    | "runtime"
    | "task_executor_name"
    | "task_status"
    | "updated_at"
  )[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** Multiple values may be separated by commas. */
  organization?: string[];
  organization_address?: string;
  organization_address_district?: string;
  organization_address_region?: string;
  organization_name?: string;
  runtime_gte?: number;
  runtime_lte?: number;
  /** Multiple values may be separated by commas. */
  service_center?: string[];
  sn?: string;
  task_executor_name?: string;
  task_title?: string;
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  relatedId: string;
}

export type VehicleSersRelatedOrgsVehiclesListData = PaginatedSerVehicleList;

export type VehicleSersRelatedOrgsVehiclesRetrieveData = VehicleDetailed;

export interface VehicleSersVehiclesListParams {
  /** Multiple values may be separated by commas. */
  brand?: string[];
  brand_name?: string;
  /** Multiple values may be separated by commas. */
  equipment?: string[];
  equipment_name?: string;
  /** Number of results to return per page. */
  limit?: number;
  /** Multiple values may be separated by commas. */
  model?: string[];
  model_name?: string;
  name?: string;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   * * `order` - Order
   * * `-order` - Order (descending)
   * * `task_status` - Task status
   * * `-task_status` - Task status (descending)
   * * `task_executor_name` - Task executor name
   * * `-task_executor_name` - Task executor name (descending)
   * * `runtime` - Runtime
   * * `-runtime` - Runtime (descending)
   * * `model_name` - Model name
   * * `-model_name` - Model name (descending)
   * * `brand_name` - Brand name
   * * `-brand_name` - Brand name (descending)
   * * `organization_address_region` - Organization address region
   * * `-organization_address_region` - Organization address region (descending)
   * * `organization_address` - Organization address
   * * `-organization_address` - Organization address (descending)
   * * `organization_name` - Organization name
   * * `-organization_name` - Organization name (descending)
   */
  o?: (
    | "-brand_name"
    | "-created_at"
    | "-model_name"
    | "-order"
    | "-organization_address"
    | "-organization_address_region"
    | "-organization_name"
    | "-runtime"
    | "-task_executor_name"
    | "-task_status"
    | "-updated_at"
    | "brand_name"
    | "created_at"
    | "model_name"
    | "order"
    | "organization_address"
    | "organization_address_region"
    | "organization_name"
    | "runtime"
    | "task_executor_name"
    | "task_status"
    | "updated_at"
  )[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** Multiple values may be separated by commas. */
  organization?: string[];
  organization_address?: string;
  organization_address_district?: string;
  organization_address_region?: string;
  organization_name?: string;
  runtime_gte?: number;
  runtime_lte?: number;
  /** Multiple values may be separated by commas. */
  service_center?: string[];
  sn?: string;
  task_executor_name?: string;
  task_title?: string;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type VehicleSersVehiclesListData = PaginatedSerVehicleList;

export type VehicleSersVehiclesRetrieveData = VehicleDetailed;

export interface VehicleSersVehiclesDocsListParams {
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  vehicleId: string;
}

export type VehicleSersVehiclesDocsListData = PaginatedVehicleDocumentationDetailedList;

export type VehicleSersVehiclesDocsCreateData = VehicleDocumentationDetailed;

export type VehicleSersVehiclesDocsRetrieveData = VehicleDocumentationDetailed;

export type VehicleSersVehiclesDocsDestroyData = any;

export interface VehicleSersVehiclesNotesListParams {
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  vehicleId: string;
}

export type VehicleSersVehiclesNotesListData = PaginatedVehicleNoteList;

export type VehicleSersVehiclesNotesCreateData = VehicleNote;

export type VehicleSersVehiclesNotesRetrieveData = VehicleNote;

export type VehicleSersVehiclesNotesPartialUpdateData = VehicleNote;

export type VehicleSersVehiclesNotesDestroyData = any;

export interface VehicleSersVehiclesPhotosListParams {
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  vehicleId: string;
}

export type VehicleSersVehiclesPhotosListData = PaginatedVehiclePhotoDetailedList;

export type VehicleSersVehiclesPhotosCreateData = VehiclePhotoDetailed;

export type VehicleSersVehiclesPhotosRetrieveData = VehiclePhotoDetailed;

export type VehicleSersVehiclesPhotosPartialUpdateData = VehiclePhotoUpdate;

export type VehicleSersVehiclesPhotosDestroyData = any;

export interface VehicleSersVehiclesRecsListParams {
  /** Multiple values may be separated by commas. */
  author?: string[];
  /**
   * Multiple values may be separated by commas.
   *
   * * `info` - info
   * * `warning` - warning
   * * `critical` - critical
   */
  level?: ("critical" | "info" | "warning")[];
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** Multiple values may be separated by commas. */
  organization?: string[];
  /** Multiple values may be separated by commas. */
  service_center?: string[];
  /**
   * Multiple values may be separated by commas.
   *
   * * `no` - no
   * * `complete` - complete
   */
  solution?: ("complete" | "no")[];
  title?: string;
  /**
   * Multiple values may be separated by commas.
   *
   * * `no` - no
   * * `posted` - posted
   * * `rejected` - rejected
   */
  verdict?: ("no" | "posted" | "rejected")[];
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  vehicleId: string;
}

export type VehicleSersVehiclesRecsListData = PaginatedVehicleRecommendationDetailedList;

export type VehicleSersVehiclesRecsCreateData = VehicleRecommendationDetailed;

export type VehicleSersVehiclesRecsRetrieveData = VehicleRecommendationDetailed;

export type VehicleSersVehiclesRecsPartialUpdateData = VehicleRecommendationDetailed;

export type VehicleSersVehiclesRecsDestroyData = any;

export interface VehicleSersVehiclesRuntimeListParams {
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  service_center?: number;
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  vehicleId: string;
}

export type VehicleSersVehiclesRuntimeListData = PaginatedVehicleRuntimeList;

export type VehicleSersVehiclesRuntimeCreateData = VehicleRuntime;

export type VehicleSersVehiclesRuntimeRetrieveData = VehicleRuntime;

export type VehicleSersVehiclesRuntimePartialUpdateData = VehicleRuntime;

export type VehicleSersVehiclesRuntimeDestroyData = any;

export type WorkM2MChatButtonCreateData = ChatButton;

export type WorkM2MChatPushCreateData = ChatPush;

export type WorkM2MChatStatusCreateData = ChatStatus;

export type WorkOrgsChatTokensCreateData = ChatToken;

export interface WorkOrgsMyGeoListParams {
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `real_date` - Real date
   * * `-real_date` - Real date (descending)
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   */
  o?: ("-created_at" | "-real_date" | "created_at" | "real_date")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type WorkOrgsMyGeoListData = PaginatedWorkEmployeeGeolocationList;

export type WorkOrgsMyGeoCreateData = WorkEmployeeGeolocation;

export interface WorkOrgsSersListParams {
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type WorkOrgsSersListData = PaginatedWorkServiceCenterList;

export type WorkOrgsSersRetrieveData = WorkServiceCenter;

export type WorkOrgsSersSearchCreateData = WorkServiceCenterSearch;

export interface WorkOrgsTasksListParams {
  /** Multiple values may be separated by commas. */
  assistants?: string[];
  /** Multiple values may be separated by commas. */
  coordinator?: string[];
  /** Multiple values may be separated by commas. */
  customer?: string[];
  customer_name?: string;
  /** Multiple values may be separated by commas. */
  executor?: string[];
  executor_name?: string;
  /** Multiple values may be separated by commas. */
  ids?: string[];
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Multiple values may be separated by commas.
   *
   * * `draft` - draft
   * * `posted` - posted
   * * `reject` - reject
   * * `delete` - delete
   * * `archived` - archived
   */
  mark?: ("archived" | "delete" | "draft" | "posted" | "reject")[];
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   * * `status_date` - Status date
   * * `-status_date` - Status date (descending)
   * * `status` - Status
   * * `-status` - Status (descending)
   * * `want_start_date` - Want start date
   * * `-want_start_date` - Want start date (descending)
   * * `plan_start_date` - Plan start date
   * * `-plan_start_date` - Plan start date (descending)
   * * `vehicle_model_name` - Vehicle model name
   * * `-vehicle_model_name` - Vehicle model name (descending)
   * * `vehicle_brand_name` - Vehicle brand name
   * * `-vehicle_brand_name` - Vehicle brand name (descending)
   * * `organization_address_region` - Organization address region
   * * `-organization_address_region` - Organization address region (descending)
   * * `organization_address` - Organization address
   * * `-organization_address` - Organization address (descending)
   * * `organization_name` - Organization name
   * * `-organization_name` - Organization name (descending)
   * * `executor_name` - Executor name
   * * `-executor_name` - Executor name (descending)
   */
  o?: (
    | "-created_at"
    | "-executor_name"
    | "-organization_address"
    | "-organization_address_region"
    | "-organization_name"
    | "-plan_start_date"
    | "-status"
    | "-status_date"
    | "-updated_at"
    | "-vehicle_brand_name"
    | "-vehicle_model_name"
    | "-want_start_date"
    | "created_at"
    | "executor_name"
    | "organization_address"
    | "organization_address_region"
    | "organization_name"
    | "plan_start_date"
    | "status"
    | "status_date"
    | "updated_at"
    | "vehicle_brand_name"
    | "vehicle_model_name"
    | "want_start_date"
  )[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** Multiple values may be separated by commas. */
  organization?: string[];
  organization_address?: string;
  organization_address_district?: string;
  organization_address_region?: string;
  organization_name?: string;
  /** Multiple values may be separated by commas. */
  service_center?: string[];
  /**
   * Multiple values may be separated by commas.
   *
   * * `search` - search
   * * `processing` - processing
   * * `approval` - approval
   * * `wait` - wait
   * * `on_way` - on_way
   * * `pause` - pause
   * * `work` - work
   * * `done` - done
   */
  status?: ("approval" | "done" | "on_way" | "pause" | "processing" | "search" | "wait" | "work")[];
  title?: string;
  /** Multiple values may be separated by commas. */
  vehicle?: string[];
  /** Multiple values may be separated by commas. */
  vehicle_brand?: string[];
  vehicle_brand_name?: string;
  /** Multiple values may be separated by commas. */
  vehicle_equipment?: string[];
  vehicle_equipment_name?: string;
  /** Multiple values may be separated by commas. */
  vehicle_model?: string[];
  vehicle_model_name?: string;
  vehicle_sn?: string;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type WorkOrgsTasksListData = PaginatedOrgWorkTaskList;

export type WorkOrgsTasksCreateData = WorkTaskDetailed;

export type WorkOrgsTasksRetrieveData = WorkTaskDetailed;

export type WorkOrgsTasksPartialUpdateData = WorkTaskDetailed;

export type WorkOrgsTasksDestroyData = any;

export type WorkOrgsTasksCustomerPartialUpdateData = WorkTaskDetailed;

export type WorkOrgsTasksGeoRetrieveData = WorkTaskGeo;

export type WorkOrgsTasksResultRetrieveData = WorkTaskResult;

export type WorkOrgsTasksResultMarkPartialUpdateData = WorkTaskResult;

export interface WorkOrgsTasksAttachmentsListParams {
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   * * `id` - Id
   * * `-id` - Id (descending)
   */
  o?: ("-created_at" | "-id" | "-updated_at" | "created_at" | "id" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  title?: string;
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  taskId: string;
}

export type WorkOrgsTasksAttachmentsListData = PaginatedWorkTaskAttachmentList;

export type WorkOrgsTasksAttachmentsCreateData = WorkTaskAttachment;

export type WorkOrgsTasksAttachmentsRetrieveData = WorkTaskAttachment;

export type WorkOrgsTasksAttachmentsPartialUpdateData = WorkTaskAttachment;

export type WorkOrgsTasksAttachmentsDestroyData = any;

export interface WorkOrgsTasksReviewsListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
  value?: number;
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  taskId: string;
}

export type WorkOrgsTasksReviewsListData = PaginatedWorkReviewList;

export type WorkOrgsTasksReviewsCreateData = WorkReview;

export type WorkOrgsTasksReviewsRetrieveData = WorkReview;

export type WorkOrgsTasksReviewsPartialUpdateData = WorkReview;

export type WorkOrgsTasksReviewsDestroyData = any;

export interface WorkOrgsTasksStatusesListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** @format uuid */
  message_uuid?: string;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   * * `verdict_date` - Verdict date
   * * `-verdict_date` - Verdict date (descending)
   */
  o?: ("-created_at" | "-updated_at" | "-verdict_date" | "created_at" | "updated_at" | "verdict_date")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  taskId: string;
}

export type WorkOrgsTasksStatusesListData = PaginatedWorkTaskStatusChangeDetailedList;

export type WorkOrgsTasksStatusesRetrieveData = WorkTaskStatusChangeDetailed;

export interface WorkOrgsTasksFullListParams {
  /** Multiple values may be separated by commas. */
  assistants?: string[];
  /** Multiple values may be separated by commas. */
  coordinator?: string[];
  /** Multiple values may be separated by commas. */
  customer?: string[];
  customer_name?: string;
  /** Multiple values may be separated by commas. */
  executor?: string[];
  executor_name?: string;
  /** Multiple values may be separated by commas. */
  ids?: string[];
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Multiple values may be separated by commas.
   *
   * * `draft` - draft
   * * `posted` - posted
   * * `reject` - reject
   * * `delete` - delete
   * * `archived` - archived
   */
  mark?: ("archived" | "delete" | "draft" | "posted" | "reject")[];
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   * * `status_date` - Status date
   * * `-status_date` - Status date (descending)
   * * `status` - Status
   * * `-status` - Status (descending)
   * * `want_start_date` - Want start date
   * * `-want_start_date` - Want start date (descending)
   * * `plan_start_date` - Plan start date
   * * `-plan_start_date` - Plan start date (descending)
   * * `vehicle_model_name` - Vehicle model name
   * * `-vehicle_model_name` - Vehicle model name (descending)
   * * `vehicle_brand_name` - Vehicle brand name
   * * `-vehicle_brand_name` - Vehicle brand name (descending)
   * * `organization_address_region` - Organization address region
   * * `-organization_address_region` - Organization address region (descending)
   * * `organization_address` - Organization address
   * * `-organization_address` - Organization address (descending)
   * * `organization_name` - Organization name
   * * `-organization_name` - Organization name (descending)
   * * `executor_name` - Executor name
   * * `-executor_name` - Executor name (descending)
   */
  o?: (
    | "-created_at"
    | "-executor_name"
    | "-organization_address"
    | "-organization_address_region"
    | "-organization_name"
    | "-plan_start_date"
    | "-status"
    | "-status_date"
    | "-updated_at"
    | "-vehicle_brand_name"
    | "-vehicle_model_name"
    | "-want_start_date"
    | "created_at"
    | "executor_name"
    | "organization_address"
    | "organization_address_region"
    | "organization_name"
    | "plan_start_date"
    | "status"
    | "status_date"
    | "updated_at"
    | "vehicle_brand_name"
    | "vehicle_model_name"
    | "want_start_date"
  )[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** Multiple values may be separated by commas. */
  organization?: string[];
  organization_address?: string;
  organization_address_district?: string;
  organization_address_region?: string;
  organization_name?: string;
  /** Multiple values may be separated by commas. */
  service_center?: string[];
  /**
   * Multiple values may be separated by commas.
   *
   * * `search` - search
   * * `processing` - processing
   * * `approval` - approval
   * * `wait` - wait
   * * `on_way` - on_way
   * * `pause` - pause
   * * `work` - work
   * * `done` - done
   */
  status?: ("approval" | "done" | "on_way" | "pause" | "processing" | "search" | "wait" | "work")[];
  title?: string;
  /** Multiple values may be separated by commas. */
  vehicle?: string[];
  /** Multiple values may be separated by commas. */
  vehicle_brand?: string[];
  vehicle_brand_name?: string;
  /** Multiple values may be separated by commas. */
  vehicle_equipment?: string[];
  vehicle_equipment_name?: string;
  /** Multiple values may be separated by commas. */
  vehicle_model?: string[];
  vehicle_model_name?: string;
  vehicle_sn?: string;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type WorkOrgsTasksFullListData = PaginatedWorkTaskDetailedList;

export interface WorkOrgsTasksGeosListParams {
  /** Multiple values may be separated by commas. */
  assistants?: string[];
  /** Multiple values may be separated by commas. */
  coordinator?: string[];
  /** Multiple values may be separated by commas. */
  customer?: string[];
  customer_name?: string;
  /** Multiple values may be separated by commas. */
  executor?: string[];
  executor_name?: string;
  /** Multiple values may be separated by commas. */
  ids?: string[];
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Multiple values may be separated by commas.
   *
   * * `draft` - draft
   * * `posted` - posted
   * * `reject` - reject
   * * `delete` - delete
   * * `archived` - archived
   */
  mark?: ("archived" | "delete" | "draft" | "posted" | "reject")[];
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   * * `status_date` - Status date
   * * `-status_date` - Status date (descending)
   * * `status` - Status
   * * `-status` - Status (descending)
   * * `want_start_date` - Want start date
   * * `-want_start_date` - Want start date (descending)
   * * `plan_start_date` - Plan start date
   * * `-plan_start_date` - Plan start date (descending)
   * * `vehicle_model_name` - Vehicle model name
   * * `-vehicle_model_name` - Vehicle model name (descending)
   * * `vehicle_brand_name` - Vehicle brand name
   * * `-vehicle_brand_name` - Vehicle brand name (descending)
   * * `organization_address_region` - Organization address region
   * * `-organization_address_region` - Organization address region (descending)
   * * `organization_address` - Organization address
   * * `-organization_address` - Organization address (descending)
   * * `organization_name` - Organization name
   * * `-organization_name` - Organization name (descending)
   * * `executor_name` - Executor name
   * * `-executor_name` - Executor name (descending)
   */
  o?: (
    | "-created_at"
    | "-executor_name"
    | "-organization_address"
    | "-organization_address_region"
    | "-organization_name"
    | "-plan_start_date"
    | "-status"
    | "-status_date"
    | "-updated_at"
    | "-vehicle_brand_name"
    | "-vehicle_model_name"
    | "-want_start_date"
    | "created_at"
    | "executor_name"
    | "organization_address"
    | "organization_address_region"
    | "organization_name"
    | "plan_start_date"
    | "status"
    | "status_date"
    | "updated_at"
    | "vehicle_brand_name"
    | "vehicle_model_name"
    | "want_start_date"
  )[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** Multiple values may be separated by commas. */
  organization?: string[];
  organization_address?: string;
  organization_address_district?: string;
  organization_address_region?: string;
  organization_name?: string;
  /** Multiple values may be separated by commas. */
  service_center?: string[];
  /**
   * Multiple values may be separated by commas.
   *
   * * `search` - search
   * * `processing` - processing
   * * `approval` - approval
   * * `wait` - wait
   * * `on_way` - on_way
   * * `pause` - pause
   * * `work` - work
   * * `done` - done
   */
  status?: ("approval" | "done" | "on_way" | "pause" | "processing" | "search" | "wait" | "work")[];
  title?: string;
  /** Multiple values may be separated by commas. */
  vehicle?: string[];
  /** Multiple values may be separated by commas. */
  vehicle_brand?: string[];
  vehicle_brand_name?: string;
  /** Multiple values may be separated by commas. */
  vehicle_equipment?: string[];
  vehicle_equipment_name?: string;
  /** Multiple values may be separated by commas. */
  vehicle_model?: string[];
  vehicle_model_name?: string;
  vehicle_sn?: string;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type WorkOrgsTasksGeosListData = PaginatedWorkTaskGeoList;

export type WorkSersChatTokensCreateData = ChatToken;

export interface WorkSersEmployeesListParams {
  is_active?: boolean;
  is_owner?: boolean;
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  profile?: number;
  /**
   * * `server` - server
   * * `client` - client
   * * `engineer` - engineer
   * * `coordinator` - coordinator
   */
  role?: "client" | "coordinator" | "engineer" | "server";
  user?: number;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type WorkSersEmployeesListData = PaginatedWorkEmployeeList;

export type WorkSersEmployeesRetrieveData = WorkEmployee;

export interface WorkSersMyGeoListParams {
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `real_date` - Real date
   * * `-real_date` - Real date (descending)
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   */
  o?: ("-created_at" | "-real_date" | "created_at" | "real_date")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type WorkSersMyGeoListData = PaginatedWorkEmployeeGeolocationList;

export type WorkSersMyGeoCreateData = WorkEmployeeGeolocation;

export interface WorkSersOrgsListParams {
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   */
  o?: ("-created_at" | "-updated_at" | "created_at" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type WorkSersOrgsListData = PaginatedWorkOrganizationList;

export type WorkSersOrgsRetrieveData = WorkOrganization;

export interface WorkSersTasksListParams {
  /** Multiple values may be separated by commas. */
  assistants?: string[];
  /** Multiple values may be separated by commas. */
  coordinator?: string[];
  /** Multiple values may be separated by commas. */
  customer?: string[];
  customer_name?: string;
  /** Multiple values may be separated by commas. */
  executor?: string[];
  executor_name?: string;
  /** Multiple values may be separated by commas. */
  ids?: string[];
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Multiple values may be separated by commas.
   *
   * * `draft` - draft
   * * `posted` - posted
   * * `reject` - reject
   * * `delete` - delete
   * * `archived` - archived
   */
  mark?: ("archived" | "delete" | "draft" | "posted" | "reject")[];
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   * * `status_date` - Status date
   * * `-status_date` - Status date (descending)
   * * `status` - Status
   * * `-status` - Status (descending)
   * * `want_start_date` - Want start date
   * * `-want_start_date` - Want start date (descending)
   * * `plan_start_date` - Plan start date
   * * `-plan_start_date` - Plan start date (descending)
   * * `vehicle_model_name` - Vehicle model name
   * * `-vehicle_model_name` - Vehicle model name (descending)
   * * `vehicle_brand_name` - Vehicle brand name
   * * `-vehicle_brand_name` - Vehicle brand name (descending)
   * * `organization_address_region` - Organization address region
   * * `-organization_address_region` - Organization address region (descending)
   * * `organization_address` - Organization address
   * * `-organization_address` - Organization address (descending)
   * * `organization_name` - Organization name
   * * `-organization_name` - Organization name (descending)
   * * `executor_name` - Executor name
   * * `-executor_name` - Executor name (descending)
   */
  o?: (
    | "-created_at"
    | "-executor_name"
    | "-organization_address"
    | "-organization_address_region"
    | "-organization_name"
    | "-plan_start_date"
    | "-status"
    | "-status_date"
    | "-updated_at"
    | "-vehicle_brand_name"
    | "-vehicle_model_name"
    | "-want_start_date"
    | "created_at"
    | "executor_name"
    | "organization_address"
    | "organization_address_region"
    | "organization_name"
    | "plan_start_date"
    | "status"
    | "status_date"
    | "updated_at"
    | "vehicle_brand_name"
    | "vehicle_model_name"
    | "want_start_date"
  )[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** Multiple values may be separated by commas. */
  organization?: string[];
  organization_address?: string;
  organization_address_district?: string;
  organization_address_region?: string;
  organization_name?: string;
  /** Multiple values may be separated by commas. */
  service_center?: string[];
  /**
   * Multiple values may be separated by commas.
   *
   * * `search` - search
   * * `processing` - processing
   * * `approval` - approval
   * * `wait` - wait
   * * `on_way` - on_way
   * * `pause` - pause
   * * `work` - work
   * * `done` - done
   */
  status?: ("approval" | "done" | "on_way" | "pause" | "processing" | "search" | "wait" | "work")[];
  title?: string;
  /** Multiple values may be separated by commas. */
  vehicle?: string[];
  /** Multiple values may be separated by commas. */
  vehicle_brand?: string[];
  vehicle_brand_name?: string;
  /** Multiple values may be separated by commas. */
  vehicle_equipment?: string[];
  vehicle_equipment_name?: string;
  /** Multiple values may be separated by commas. */
  vehicle_model?: string[];
  vehicle_model_name?: string;
  vehicle_sn?: string;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type WorkSersTasksListData = PaginatedSerWorkTaskList;

export type WorkSersTasksCreateData = WorkTaskDetailed;

export type WorkSersTasksRetrieveData = WorkTaskDetailed;

export type WorkSersTasksExecutorsPartialUpdateData = WorkTaskDetailed;

export type WorkSersTasksGeoRetrieveData = WorkTaskGeo;

export type WorkSersTasksResultRetrieveData = WorkTaskResult;

export type WorkSersTasksResultPartialUpdateData = WorkTaskResult;

export type WorkSersTasksResultApplyPartialUpdateData = WorkTaskResult;

export type WorkSersTasksResultEditPartialUpdateData = WorkTaskResult;

export interface WorkSersTasksAttachmentsListParams {
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   * * `id` - Id
   * * `-id` - Id (descending)
   */
  o?: ("-created_at" | "-id" | "-updated_at" | "created_at" | "id" | "updated_at")[];
  /** The initial index from which to return the results. */
  offset?: number;
  title?: string;
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  taskId: string;
}

export type WorkSersTasksAttachmentsListData = PaginatedWorkTaskAttachmentList;

export type WorkSersTasksAttachmentsCreateData = WorkTaskAttachment;

export type WorkSersTasksAttachmentsRetrieveData = WorkTaskAttachment;

export type WorkSersTasksAttachmentsPartialUpdateData = WorkTaskAttachment;

export type WorkSersTasksAttachmentsDestroyData = any;

export interface WorkSersTasksReviewsListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
  value?: number;
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  taskId: string;
}

export type WorkSersTasksReviewsListData = PaginatedWorkReviewList;

export type WorkSersTasksReviewsCreateData = WorkReview;

export type WorkSersTasksReviewsRetrieveData = WorkReview;

export type WorkSersTasksReviewsPartialUpdateData = WorkReview;

export type WorkSersTasksReviewsDestroyData = any;

export interface WorkSersTasksRoutesListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** The initial index from which to return the results. */
  offset?: number;
  /**
   * Multiple values may be separated by commas.
   *
   * * `prepare` - prepare
   * * `ready` - ready
   * * `rebuilt` - rebuilt
   * * `start` - start
   * * `stop` - stop
   * * `done` - done
   * * `cancel` - cancel
   */
  state?: ("cancel" | "done" | "prepare" | "ready" | "rebuilt" | "start" | "stop")[];
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  taskId: string;
}

export type WorkSersTasksRoutesListData = PaginatedWorkTaskRouteList;

export type WorkSersTasksRoutesCreateData = WorkTaskRoute;

export type WorkSersTasksRoutesRetrieveData = WorkTaskRoute;

export interface WorkSersTasksStatusesListParams {
  /** Number of results to return per page. */
  limit?: number;
  /** @format uuid */
  message_uuid?: string;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   * * `verdict_date` - Verdict date
   * * `-verdict_date` - Verdict date (descending)
   */
  o?: ("-created_at" | "-updated_at" | "-verdict_date" | "created_at" | "updated_at" | "verdict_date")[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** @pattern ^\d+$ */
  orgId: string;
  /** @pattern ^\d+$ */
  taskId: string;
}

export type WorkSersTasksStatusesListData = PaginatedWorkTaskStatusChangeDetailedList;

export type WorkSersTasksStatusesRetrieveData = WorkTaskStatusChangeDetailed;

export interface WorkSersTasksFullListParams {
  /** Multiple values may be separated by commas. */
  assistants?: string[];
  /** Multiple values may be separated by commas. */
  coordinator?: string[];
  /** Multiple values may be separated by commas. */
  customer?: string[];
  customer_name?: string;
  /** Multiple values may be separated by commas. */
  executor?: string[];
  executor_name?: string;
  /** Multiple values may be separated by commas. */
  ids?: string[];
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Multiple values may be separated by commas.
   *
   * * `draft` - draft
   * * `posted` - posted
   * * `reject` - reject
   * * `delete` - delete
   * * `archived` - archived
   */
  mark?: ("archived" | "delete" | "draft" | "posted" | "reject")[];
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   * * `status_date` - Status date
   * * `-status_date` - Status date (descending)
   * * `status` - Status
   * * `-status` - Status (descending)
   * * `want_start_date` - Want start date
   * * `-want_start_date` - Want start date (descending)
   * * `plan_start_date` - Plan start date
   * * `-plan_start_date` - Plan start date (descending)
   * * `vehicle_model_name` - Vehicle model name
   * * `-vehicle_model_name` - Vehicle model name (descending)
   * * `vehicle_brand_name` - Vehicle brand name
   * * `-vehicle_brand_name` - Vehicle brand name (descending)
   * * `organization_address_region` - Organization address region
   * * `-organization_address_region` - Organization address region (descending)
   * * `organization_address` - Organization address
   * * `-organization_address` - Organization address (descending)
   * * `organization_name` - Organization name
   * * `-organization_name` - Organization name (descending)
   * * `executor_name` - Executor name
   * * `-executor_name` - Executor name (descending)
   */
  o?: (
    | "-created_at"
    | "-executor_name"
    | "-organization_address"
    | "-organization_address_region"
    | "-organization_name"
    | "-plan_start_date"
    | "-status"
    | "-status_date"
    | "-updated_at"
    | "-vehicle_brand_name"
    | "-vehicle_model_name"
    | "-want_start_date"
    | "created_at"
    | "executor_name"
    | "organization_address"
    | "organization_address_region"
    | "organization_name"
    | "plan_start_date"
    | "status"
    | "status_date"
    | "updated_at"
    | "vehicle_brand_name"
    | "vehicle_model_name"
    | "want_start_date"
  )[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** Multiple values may be separated by commas. */
  organization?: string[];
  organization_address?: string;
  organization_address_district?: string;
  organization_address_region?: string;
  organization_name?: string;
  /** Multiple values may be separated by commas. */
  service_center?: string[];
  /**
   * Multiple values may be separated by commas.
   *
   * * `search` - search
   * * `processing` - processing
   * * `approval` - approval
   * * `wait` - wait
   * * `on_way` - on_way
   * * `pause` - pause
   * * `work` - work
   * * `done` - done
   */
  status?: ("approval" | "done" | "on_way" | "pause" | "processing" | "search" | "wait" | "work")[];
  title?: string;
  /** Multiple values may be separated by commas. */
  vehicle?: string[];
  /** Multiple values may be separated by commas. */
  vehicle_brand?: string[];
  vehicle_brand_name?: string;
  /** Multiple values may be separated by commas. */
  vehicle_equipment?: string[];
  vehicle_equipment_name?: string;
  /** Multiple values may be separated by commas. */
  vehicle_model?: string[];
  vehicle_model_name?: string;
  vehicle_sn?: string;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type WorkSersTasksFullListData = PaginatedWorkTaskDetailedList;

export interface WorkSersTasksGeosListParams {
  /** Multiple values may be separated by commas. */
  assistants?: string[];
  /** Multiple values may be separated by commas. */
  coordinator?: string[];
  /** Multiple values may be separated by commas. */
  customer?: string[];
  customer_name?: string;
  /** Multiple values may be separated by commas. */
  executor?: string[];
  executor_name?: string;
  /** Multiple values may be separated by commas. */
  ids?: string[];
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Multiple values may be separated by commas.
   *
   * * `draft` - draft
   * * `posted` - posted
   * * `reject` - reject
   * * `delete` - delete
   * * `archived` - archived
   */
  mark?: ("archived" | "delete" | "draft" | "posted" | "reject")[];
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   * * `status_date` - Status date
   * * `-status_date` - Status date (descending)
   * * `status` - Status
   * * `-status` - Status (descending)
   * * `want_start_date` - Want start date
   * * `-want_start_date` - Want start date (descending)
   * * `plan_start_date` - Plan start date
   * * `-plan_start_date` - Plan start date (descending)
   * * `vehicle_model_name` - Vehicle model name
   * * `-vehicle_model_name` - Vehicle model name (descending)
   * * `vehicle_brand_name` - Vehicle brand name
   * * `-vehicle_brand_name` - Vehicle brand name (descending)
   * * `organization_address_region` - Organization address region
   * * `-organization_address_region` - Organization address region (descending)
   * * `organization_address` - Organization address
   * * `-organization_address` - Organization address (descending)
   * * `organization_name` - Organization name
   * * `-organization_name` - Organization name (descending)
   * * `executor_name` - Executor name
   * * `-executor_name` - Executor name (descending)
   */
  o?: (
    | "-created_at"
    | "-executor_name"
    | "-organization_address"
    | "-organization_address_region"
    | "-organization_name"
    | "-plan_start_date"
    | "-status"
    | "-status_date"
    | "-updated_at"
    | "-vehicle_brand_name"
    | "-vehicle_model_name"
    | "-want_start_date"
    | "created_at"
    | "executor_name"
    | "organization_address"
    | "organization_address_region"
    | "organization_name"
    | "plan_start_date"
    | "status"
    | "status_date"
    | "updated_at"
    | "vehicle_brand_name"
    | "vehicle_model_name"
    | "want_start_date"
  )[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** Multiple values may be separated by commas. */
  organization?: string[];
  organization_address?: string;
  organization_address_district?: string;
  organization_address_region?: string;
  organization_name?: string;
  /** Multiple values may be separated by commas. */
  service_center?: string[];
  /**
   * Multiple values may be separated by commas.
   *
   * * `search` - search
   * * `processing` - processing
   * * `approval` - approval
   * * `wait` - wait
   * * `on_way` - on_way
   * * `pause` - pause
   * * `work` - work
   * * `done` - done
   */
  status?: ("approval" | "done" | "on_way" | "pause" | "processing" | "search" | "wait" | "work")[];
  title?: string;
  /** Multiple values may be separated by commas. */
  vehicle?: string[];
  /** Multiple values may be separated by commas. */
  vehicle_brand?: string[];
  vehicle_brand_name?: string;
  /** Multiple values may be separated by commas. */
  vehicle_equipment?: string[];
  vehicle_equipment_name?: string;
  /** Multiple values may be separated by commas. */
  vehicle_model?: string[];
  vehicle_model_name?: string;
  vehicle_sn?: string;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type WorkSersTasksGeosListData = PaginatedWorkTaskGeoList;

export interface WorkSersTasksVerboseListParams {
  /** Multiple values may be separated by commas. */
  assistants?: string[];
  /** Multiple values may be separated by commas. */
  coordinator?: string[];
  /** Multiple values may be separated by commas. */
  customer?: string[];
  customer_name?: string;
  /** Multiple values may be separated by commas. */
  executor?: string[];
  executor_name?: string;
  /** Multiple values may be separated by commas. */
  ids?: string[];
  /** Number of results to return per page. */
  limit?: number;
  /**
   * Multiple values may be separated by commas.
   *
   * * `draft` - draft
   * * `posted` - posted
   * * `reject` - reject
   * * `delete` - delete
   * * `archived` - archived
   */
  mark?: ("archived" | "delete" | "draft" | "posted" | "reject")[];
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   * * `status_date` - Status date
   * * `-status_date` - Status date (descending)
   * * `status` - Status
   * * `-status` - Status (descending)
   * * `want_start_date` - Want start date
   * * `-want_start_date` - Want start date (descending)
   * * `plan_start_date` - Plan start date
   * * `-plan_start_date` - Plan start date (descending)
   * * `vehicle_model_name` - Vehicle model name
   * * `-vehicle_model_name` - Vehicle model name (descending)
   * * `vehicle_brand_name` - Vehicle brand name
   * * `-vehicle_brand_name` - Vehicle brand name (descending)
   * * `organization_address_region` - Organization address region
   * * `-organization_address_region` - Organization address region (descending)
   * * `organization_address` - Organization address
   * * `-organization_address` - Organization address (descending)
   * * `organization_name` - Organization name
   * * `-organization_name` - Organization name (descending)
   * * `executor_name` - Executor name
   * * `-executor_name` - Executor name (descending)
   */
  o?: (
    | "-created_at"
    | "-executor_name"
    | "-organization_address"
    | "-organization_address_region"
    | "-organization_name"
    | "-plan_start_date"
    | "-status"
    | "-status_date"
    | "-updated_at"
    | "-vehicle_brand_name"
    | "-vehicle_model_name"
    | "-want_start_date"
    | "created_at"
    | "executor_name"
    | "organization_address"
    | "organization_address_region"
    | "organization_name"
    | "plan_start_date"
    | "status"
    | "status_date"
    | "updated_at"
    | "vehicle_brand_name"
    | "vehicle_model_name"
    | "want_start_date"
  )[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** Multiple values may be separated by commas. */
  organization?: string[];
  organization_address?: string;
  organization_address_district?: string;
  organization_address_region?: string;
  organization_name?: string;
  /** Multiple values may be separated by commas. */
  service_center?: string[];
  /**
   * Multiple values may be separated by commas.
   *
   * * `search` - search
   * * `processing` - processing
   * * `approval` - approval
   * * `wait` - wait
   * * `on_way` - on_way
   * * `pause` - pause
   * * `work` - work
   * * `done` - done
   */
  status?: ("approval" | "done" | "on_way" | "pause" | "processing" | "search" | "wait" | "work")[];
  title?: string;
  /** Multiple values may be separated by commas. */
  vehicle?: string[];
  /** Multiple values may be separated by commas. */
  vehicle_brand?: string[];
  vehicle_brand_name?: string;
  /** Multiple values may be separated by commas. */
  vehicle_equipment?: string[];
  vehicle_equipment_name?: string;
  /** Multiple values may be separated by commas. */
  vehicle_model?: string[];
  vehicle_model_name?: string;
  vehicle_sn?: string;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type WorkSersTasksVerboseListData = PaginatedSerWorkTaskVerboseList;

export interface WorkSersVehiclesListParams {
  /** Multiple values may be separated by commas. */
  brand?: string[];
  brand_name?: string;
  /** Multiple values may be separated by commas. */
  equipment?: string[];
  equipment_name?: string;
  /** Number of results to return per page. */
  limit?: number;
  /** Multiple values may be separated by commas. */
  model?: string[];
  model_name?: string;
  name?: string;
  /**
   * Ordering
   *
   * * `created_at` - Created at
   * * `-created_at` - Created at (descending)
   * * `updated_at` - Updated at
   * * `-updated_at` - Updated at (descending)
   * * `order` - Order
   * * `-order` - Order (descending)
   * * `task_status` - Task status
   * * `-task_status` - Task status (descending)
   * * `task_executor_name` - Task executor name
   * * `-task_executor_name` - Task executor name (descending)
   * * `runtime` - Runtime
   * * `-runtime` - Runtime (descending)
   * * `model_name` - Model name
   * * `-model_name` - Model name (descending)
   * * `brand_name` - Brand name
   * * `-brand_name` - Brand name (descending)
   * * `organization_address_region` - Organization address region
   * * `-organization_address_region` - Organization address region (descending)
   * * `organization_address` - Organization address
   * * `-organization_address` - Organization address (descending)
   * * `organization_name` - Organization name
   * * `-organization_name` - Organization name (descending)
   */
  o?: (
    | "-brand_name"
    | "-created_at"
    | "-model_name"
    | "-order"
    | "-organization_address"
    | "-organization_address_region"
    | "-organization_name"
    | "-runtime"
    | "-task_executor_name"
    | "-task_status"
    | "-updated_at"
    | "brand_name"
    | "created_at"
    | "model_name"
    | "order"
    | "organization_address"
    | "organization_address_region"
    | "organization_name"
    | "runtime"
    | "task_executor_name"
    | "task_status"
    | "updated_at"
  )[];
  /** The initial index from which to return the results. */
  offset?: number;
  /** Multiple values may be separated by commas. */
  organization?: string[];
  organization_address?: string;
  organization_address_district?: string;
  organization_address_region?: string;
  organization_name?: string;
  runtime_gte?: number;
  runtime_lte?: number;
  /** Multiple values may be separated by commas. */
  service_center?: string[];
  sn?: string;
  task_executor_name?: string;
  task_title?: string;
  /** @pattern ^\d+$ */
  orgId: string;
}

export type WorkSersVehiclesListData = PaginatedWorkVehicleList;

export type WorkSersVehiclesRetrieveData = WorkVehicle;

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title СервисПро
 * @version 0.0.1 (v1)
 *
 * Автодокументация
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags account
     * @name AccountActionsActivationCreate
     * @request POST:/api/v1/account/actions/activation/
     * @secure
     */
    accountActionsActivationCreate: (data: UserActivation, params: RequestParams = {}) =>
      this.request<AccountActionsActivationCreateData, any>({
        path: `/api/v1/account/actions/activation/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags account
     * @name AccountActionsRegistrationCreate
     * @request POST:/api/v1/account/actions/registration/
     * @secure
     */
    accountActionsRegistrationCreate: (data: AccountRegistration, params: RequestParams = {}) =>
      this.request<AccountActionsRegistrationCreateData, any>({
        path: `/api/v1/account/actions/registration/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags account
     * @name AccountActionsResendActivationCreate
     * @request POST:/api/v1/account/actions/resend-activation/
     * @secure
     */
    accountActionsResendActivationCreate: (data: UserResendActivation, params: RequestParams = {}) =>
      this.request<AccountActionsResendActivationCreateData, any>({
        path: `/api/v1/account/actions/resend-activation/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags account
     * @name AccountActionsResetPasswordCreate
     * @request POST:/api/v1/account/actions/reset-password/
     * @secure
     */
    accountActionsResetPasswordCreate: (data: UserResetPassword, params: RequestParams = {}) =>
      this.request<AccountActionsResetPasswordCreateData, any>({
        path: `/api/v1/account/actions/reset-password/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags account
     * @name AccountActionsResetPasswordConfirmCreate
     * @request POST:/api/v1/account/actions/reset-password-confirm/
     * @secure
     */
    accountActionsResetPasswordConfirmCreate: (data: UserResetPasswordConfirm, params: RequestParams = {}) =>
      this.request<AccountActionsResetPasswordConfirmCreateData, any>({
        path: `/api/v1/account/actions/reset-password-confirm/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags account
     * @name AccountDeviceList
     * @request GET:/api/v1/account/device/
     * @secure
     */
    accountDeviceList: (query: AccountDeviceListParams, params: RequestParams = {}) =>
      this.request<AccountDeviceListData, any>({
        path: `/api/v1/account/device/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags account
     * @name AccountDeviceCreate
     * @request POST:/api/v1/account/device/
     * @secure
     */
    accountDeviceCreate: (data: Device, params: RequestParams = {}) =>
      this.request<AccountDeviceCreateData, any>({
        path: `/api/v1/account/device/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags account
     * @name AccountDeviceDestroy
     * @request DELETE:/api/v1/account/device/{token}/
     * @secure
     */
    accountDeviceDestroy: (token: string, params: RequestParams = {}) =>
      this.request<AccountDeviceDestroyData, any>({
        path: `/api/v1/account/device/${token}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Takes a token and blacklists it. Must be used with the `rest_framework_simplejwt.token_blacklist` app installed.
     *
     * @tags account
     * @name AccountJwtBlacklistCreate
     * @request POST:/api/v1/account/jwt/blacklist/
     */
    accountJwtBlacklistCreate: (data: TokenBlacklist, params: RequestParams = {}) =>
      this.request<AccountJwtBlacklistCreateData, any>({
        path: `/api/v1/account/jwt/blacklist/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Takes a token and blacklists it. Must be used with the `rest_framework_simplejwt.token_blacklist` app installed.
     *
     * @tags account
     * @name AccountJwtBlacklistCookieCreate
     * @request POST:/api/v1/account/jwt/blacklist-cookie/
     */
    accountJwtBlacklistCookieCreate: (params: RequestParams = {}) =>
      this.request<AccountJwtBlacklistCookieCreateData, any>({
        path: `/api/v1/account/jwt/blacklist-cookie/`,
        method: "POST",
        ...params,
      }),

    /**
     * @description Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     *
     * @tags account
     * @name AccountJwtCreateCreate
     * @request POST:/api/v1/account/jwt/create/
     */
    accountJwtCreateCreate: (data: TokenObtainPairSerializerV2, params: RequestParams = {}) =>
      this.request<AccountJwtCreateCreateData, any>({
        path: `/api/v1/account/jwt/create/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     *
     * @tags account
     * @name AccountJwtCreateCookieCreate
     * @request POST:/api/v1/account/jwt/create-cookie/
     */
    accountJwtCreateCookieCreate: (data: TokenObtainPairSerializerV2, params: RequestParams = {}) =>
      this.request<AccountJwtCreateCookieCreateData, any>({
        path: `/api/v1/account/jwt/create-cookie/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
     *
     * @tags account
     * @name AccountJwtRefreshCreate
     * @request POST:/api/v1/account/jwt/refresh/
     */
    accountJwtRefreshCreate: (data: TokenRefresh, params: RequestParams = {}) =>
      this.request<AccountJwtRefreshCreateData, any>({
        path: `/api/v1/account/jwt/refresh/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
     *
     * @tags account
     * @name AccountJwtRefreshCookieCreate
     * @request POST:/api/v1/account/jwt/refresh-cookie/
     */
    accountJwtRefreshCookieCreate: (data: CookieTokenRefresh, params: RequestParams = {}) =>
      this.request<AccountJwtRefreshCookieCreateData, any>({
        path: `/api/v1/account/jwt/refresh-cookie/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Takes a token and indicates if it is valid.  This view provides no information about a token's fitness for a particular use.
     *
     * @tags account
     * @name AccountJwtVerifyCreate
     * @request POST:/api/v1/account/jwt/verify/
     */
    accountJwtVerifyCreate: (data: TokenVerify, params: RequestParams = {}) =>
      this.request<AccountJwtVerifyCreateData, any>({
        path: `/api/v1/account/jwt/verify/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags account
     * @name AccountMeRetrieve
     * @request GET:/api/v1/account/me/
     * @secure
     */
    accountMeRetrieve: (params: RequestParams = {}) =>
      this.request<AccountMeRetrieveData, any>({
        path: `/api/v1/account/me/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags account
     * @name AccountMePartialUpdate
     * @request PATCH:/api/v1/account/me/
     * @secure
     */
    accountMePartialUpdate: (data: PatchedUserPersonal, params: RequestParams = {}) =>
      this.request<AccountMePartialUpdateData, any>({
        path: `/api/v1/account/me/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags account
     * @name AccountMeAccountRegistrationRetryCreate
     * @request POST:/api/v1/account/me/account-registration-retry/
     * @secure
     */
    accountMeAccountRegistrationRetryCreate: (data: AccountRegistrationRetry, params: RequestParams = {}) =>
      this.request<AccountMeAccountRegistrationRetryCreateData, any>({
        path: `/api/v1/account/me/account-registration-retry/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags account
     * @name AccountMeDeleteAccountCreate
     * @request POST:/api/v1/account/me/delete-account/
     * @secure
     */
    accountMeDeleteAccountCreate: (data: UserDeleteAccount, params: RequestParams = {}) =>
      this.request<AccountMeDeleteAccountCreateData, any>({
        path: `/api/v1/account/me/delete-account/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags account
     * @name AccountMeDeleteAccountConfirmCreate
     * @request POST:/api/v1/account/me/delete-account-confirm/
     * @secure
     */
    accountMeDeleteAccountConfirmCreate: (data: UserDeleteAccountConfirm, params: RequestParams = {}) =>
      this.request<AccountMeDeleteAccountConfirmCreateData, any>({
        path: `/api/v1/account/me/delete-account-confirm/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags export
     * @name ExportSersReportsList
     * @request GET:/api/v1/export/sers/{org_id}/reports/
     * @secure
     */
    exportSersReportsList: ({ orgId, ...query }: ExportSersReportsListParams, params: RequestParams = {}) =>
      this.request<ExportSersReportsListData, any>({
        path: `/api/v1/export/sers/${orgId}/reports/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags export
     * @name ExportSersReportsCreate
     * @request POST:/api/v1/export/sers/{org_id}/reports/
     * @secure
     */
    exportSersReportsCreate: (orgId: string, data: Report, params: RequestParams = {}) =>
      this.request<ExportSersReportsCreateData, any>({
        path: `/api/v1/export/sers/${orgId}/reports/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags export
     * @name ExportSersReportsRetrieve
     * @request GET:/api/v1/export/sers/{org_id}/reports/{id}/
     * @secure
     */
    exportSersReportsRetrieve: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<ExportSersReportsRetrieveData, any>({
        path: `/api/v1/export/sers/${orgId}/reports/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags export
     * @name ExportSersReportsDestroy
     * @request DELETE:/api/v1/export/sers/{org_id}/reports/{id}/
     * @secure
     */
    exportSersReportsDestroy: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<ExportSersReportsDestroyData, any>({
        path: `/api/v1/export/sers/${orgId}/reports/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgMyRetrieve
     * @request GET:/api/v1/org/my/
     * @secure
     */
    orgMyRetrieve: (params: RequestParams = {}) =>
      this.request<OrgMyRetrieveData, any>({
        path: `/api/v1/org/my/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgMyEmploymentsRetrieve
     * @request GET:/api/v1/org/my-employments/
     * @secure
     */
    orgMyEmploymentsRetrieve: (params: RequestParams = {}) =>
      this.request<OrgMyEmploymentsRetrieveData, any>({
        path: `/api/v1/org/my-employments/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgMyInvitesRetrieve
     * @request GET:/api/v1/org/my-invites/
     * @secure
     */
    orgMyInvitesRetrieve: (params: RequestParams = {}) =>
      this.request<OrgMyInvitesRetrieveData, any>({
        path: `/api/v1/org/my-invites/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgNotificationList
     * @request GET:/api/v1/org/notification/
     * @secure
     */
    orgNotificationList: (query: OrgNotificationListParams, params: RequestParams = {}) =>
      this.request<OrgNotificationListData, any>({
        path: `/api/v1/org/notification/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgNotificationRetrieve
     * @request GET:/api/v1/org/notification/{id}/
     * @secure
     */
    orgNotificationRetrieve: (id: number, params: RequestParams = {}) =>
      this.request<OrgNotificationRetrieveData, any>({
        path: `/api/v1/org/notification/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsList
     * @request GET:/api/v1/org/orgs/
     * @secure
     */
    orgOrgsList: (query: OrgOrgsListParams, params: RequestParams = {}) =>
      this.request<OrgOrgsListData, any>({
        path: `/api/v1/org/orgs/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsInvitesList
     * @request GET:/api/v1/org/orgs-invites/
     * @secure
     */
    orgOrgsInvitesList: (query: OrgOrgsInvitesListParams, params: RequestParams = {}) =>
      this.request<OrgOrgsInvitesListData, any>({
        path: `/api/v1/org/orgs-invites/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsInvitesCreate
     * @request POST:/api/v1/org/orgs-invites/
     * @secure
     */
    orgOrgsInvitesCreate: (data: OrganizationInviteDetailed, params: RequestParams = {}) =>
      this.request<OrgOrgsInvitesCreateData, any>({
        path: `/api/v1/org/orgs-invites/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsInvitesRetrieve
     * @request GET:/api/v1/org/orgs-invites/{id}/
     * @secure
     */
    orgOrgsInvitesRetrieve: (id: number, params: RequestParams = {}) =>
      this.request<OrgOrgsInvitesRetrieveData, any>({
        path: `/api/v1/org/orgs-invites/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsInvitesDestroy
     * @request DELETE:/api/v1/org/orgs-invites/{id}/
     * @secure
     */
    orgOrgsInvitesDestroy: (id: number, params: RequestParams = {}) =>
      this.request<OrgOrgsInvitesDestroyData, any>({
        path: `/api/v1/org/orgs-invites/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsInvitesInnCreate
     * @request POST:/api/v1/org/orgs-invites/inn/
     * @secure
     */
    orgOrgsInvitesInnCreate: (data: OrganizationInn, params: RequestParams = {}) =>
      this.request<OrgOrgsInvitesInnCreateData, any>({
        path: `/api/v1/org/orgs-invites/inn/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsContactPartialUpdate
     * @request PATCH:/api/v1/org/orgs/{org_id}/contact/
     * @secure
     */
    orgOrgsContactPartialUpdate: (orgId: string, data: PatchedProfile, params: RequestParams = {}) =>
      this.request<OrgOrgsContactPartialUpdateData, any>({
        path: `/api/v1/org/orgs/${orgId}/contact/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsEmployeesList
     * @request GET:/api/v1/org/orgs/{org_id}/employees/
     * @secure
     */
    orgOrgsEmployeesList: ({ orgId, ...query }: OrgOrgsEmployeesListParams, params: RequestParams = {}) =>
      this.request<OrgOrgsEmployeesListData, any>({
        path: `/api/v1/org/orgs/${orgId}/employees/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsEmployeesCreate
     * @request POST:/api/v1/org/orgs/{org_id}/employees/
     * @secure
     */
    orgOrgsEmployeesCreate: (orgId: string, data: EmployeeDetailedWithRating, params: RequestParams = {}) =>
      this.request<OrgOrgsEmployeesCreateData, any>({
        path: `/api/v1/org/orgs/${orgId}/employees/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsEmployeesRetrieve
     * @request GET:/api/v1/org/orgs/{org_id}/employees/{id}/
     * @secure
     */
    orgOrgsEmployeesRetrieve: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<OrgOrgsEmployeesRetrieveData, any>({
        path: `/api/v1/org/orgs/${orgId}/employees/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsEmployeesPartialUpdate
     * @request PATCH:/api/v1/org/orgs/{org_id}/employees/{id}/
     * @secure
     */
    orgOrgsEmployeesPartialUpdate: (
      id: number,
      orgId: string,
      data: PatchedEmployeeDetailedWithRating,
      params: RequestParams = {},
    ) =>
      this.request<OrgOrgsEmployeesPartialUpdateData, any>({
        path: `/api/v1/org/orgs/${orgId}/employees/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsEmployeesDestroy
     * @request DELETE:/api/v1/org/orgs/{org_id}/employees/{id}/
     * @secure
     */
    orgOrgsEmployeesDestroy: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<OrgOrgsEmployeesDestroyData, any>({
        path: `/api/v1/org/orgs/${orgId}/employees/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsMyProfileRetrieve
     * @request GET:/api/v1/org/orgs/{org_id}/my-profile/
     * @secure
     */
    orgOrgsMyProfileRetrieve: (orgId: string, params: RequestParams = {}) =>
      this.request<OrgOrgsMyProfileRetrieveData, any>({
        path: `/api/v1/org/orgs/${orgId}/my-profile/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsMyProfilePartialUpdate
     * @request PATCH:/api/v1/org/orgs/{org_id}/my-profile/
     * @secure
     */
    orgOrgsMyProfilePartialUpdate: (orgId: string, data: PatchedProfile, params: RequestParams = {}) =>
      this.request<OrgOrgsMyProfilePartialUpdateData, any>({
        path: `/api/v1/org/orgs/${orgId}/my-profile/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsPointsList
     * @request GET:/api/v1/org/orgs/{org_id}/points/
     * @secure
     */
    orgOrgsPointsList: ({ orgId, ...query }: OrgOrgsPointsListParams, params: RequestParams = {}) =>
      this.request<OrgOrgsPointsListData, any>({
        path: `/api/v1/org/orgs/${orgId}/points/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsPointsCreate
     * @request POST:/api/v1/org/orgs/{org_id}/points/
     * @secure
     */
    orgOrgsPointsCreate: (orgId: string, data: ControlPoint, params: RequestParams = {}) =>
      this.request<OrgOrgsPointsCreateData, any>({
        path: `/api/v1/org/orgs/${orgId}/points/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsPointsRetrieve
     * @request GET:/api/v1/org/orgs/{org_id}/points/{id}/
     * @secure
     */
    orgOrgsPointsRetrieve: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<OrgOrgsPointsRetrieveData, any>({
        path: `/api/v1/org/orgs/${orgId}/points/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsPointsPartialUpdate
     * @request PATCH:/api/v1/org/orgs/{org_id}/points/{id}/
     * @secure
     */
    orgOrgsPointsPartialUpdate: (id: number, orgId: string, data: PatchedControlPoint, params: RequestParams = {}) =>
      this.request<OrgOrgsPointsPartialUpdateData, any>({
        path: `/api/v1/org/orgs/${orgId}/points/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsPointsDestroy
     * @request DELETE:/api/v1/org/orgs/{org_id}/points/{id}/
     * @secure
     */
    orgOrgsPointsDestroy: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<OrgOrgsPointsDestroyData, any>({
        path: `/api/v1/org/orgs/${orgId}/points/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsRelatedSersList
     * @request GET:/api/v1/org/orgs/{org_id}/related-sers/
     * @secure
     */
    orgOrgsRelatedSersList: ({ orgId, ...query }: OrgOrgsRelatedSersListParams, params: RequestParams = {}) =>
      this.request<OrgOrgsRelatedSersListData, any>({
        path: `/api/v1/org/orgs/${orgId}/related-sers/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsRelatedSersRetrieve
     * @request GET:/api/v1/org/orgs/{org_id}/related-sers/{related_id}/
     * @secure
     */
    orgOrgsRelatedSersRetrieve: (orgId: string, relatedId: number, params: RequestParams = {}) =>
      this.request<OrgOrgsRelatedSersRetrieveData, any>({
        path: `/api/v1/org/orgs/${orgId}/related-sers/${relatedId}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsRelatedSersEmployeesList
     * @request GET:/api/v1/org/orgs/{org_id}/related-sers/{related_id}/employees/
     * @secure
     */
    orgOrgsRelatedSersEmployeesList: (
      { orgId, relatedId, ...query }: OrgOrgsRelatedSersEmployeesListParams,
      params: RequestParams = {},
    ) =>
      this.request<OrgOrgsRelatedSersEmployeesListData, any>({
        path: `/api/v1/org/orgs/${orgId}/related-sers/${relatedId}/employees/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsRelatedSersEmployeesRetrieve
     * @request GET:/api/v1/org/orgs/{org_id}/related-sers/{related_id}/employees/{id}/
     * @secure
     */
    orgOrgsRelatedSersEmployeesRetrieve: (id: number, orgId: string, relatedId: string, params: RequestParams = {}) =>
      this.request<OrgOrgsRelatedSersEmployeesRetrieveData, any>({
        path: `/api/v1/org/orgs/${orgId}/related-sers/${relatedId}/employees/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsRequisitesPartialUpdate
     * @request PATCH:/api/v1/org/orgs/{org_id}/requisites/
     * @secure
     */
    orgOrgsRequisitesPartialUpdate: (orgId: string, data: PatchedOrganizationRequisites, params: RequestParams = {}) =>
      this.request<OrgOrgsRequisitesPartialUpdateData, any>({
        path: `/api/v1/org/orgs/${orgId}/requisites/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsServiceCenterPartialUpdate
     * @request PATCH:/api/v1/org/orgs/{org_id}/service-center/
     * @secure
     */
    orgOrgsServiceCenterPartialUpdate: (orgId: string, data: PatchedServiceCenter, params: RequestParams = {}) =>
      this.request<OrgOrgsServiceCenterPartialUpdateData, any>({
        path: `/api/v1/org/orgs/${orgId}/service-center/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsSettingsPartialUpdate
     * @request PATCH:/api/v1/org/orgs/{org_id}/settings/
     * @secure
     */
    orgOrgsSettingsPartialUpdate: (orgId: string, data: PatchedOrganizationSettings, params: RequestParams = {}) =>
      this.request<OrgOrgsSettingsPartialUpdateData, any>({
        path: `/api/v1/org/orgs/${orgId}/settings/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsUserInvitesList
     * @request GET:/api/v1/org/orgs/{org_id}/user-invites/
     * @secure
     */
    orgOrgsUserInvitesList: ({ orgId, ...query }: OrgOrgsUserInvitesListParams, params: RequestParams = {}) =>
      this.request<OrgOrgsUserInvitesListData, any>({
        path: `/api/v1/org/orgs/${orgId}/user-invites/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsUserInvitesCreate
     * @request POST:/api/v1/org/orgs/{org_id}/user-invites/
     * @secure
     */
    orgOrgsUserInvitesCreate: (orgId: string, data: UserInviteDetailed, params: RequestParams = {}) =>
      this.request<OrgOrgsUserInvitesCreateData, any>({
        path: `/api/v1/org/orgs/${orgId}/user-invites/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsUserInvitesRetrieve
     * @request GET:/api/v1/org/orgs/{org_id}/user-invites/{id}/
     * @secure
     */
    orgOrgsUserInvitesRetrieve: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<OrgOrgsUserInvitesRetrieveData, any>({
        path: `/api/v1/org/orgs/${orgId}/user-invites/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsUserInvitesDestroy
     * @request DELETE:/api/v1/org/orgs/{org_id}/user-invites/{id}/
     * @secure
     */
    orgOrgsUserInvitesDestroy: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<OrgOrgsUserInvitesDestroyData, any>({
        path: `/api/v1/org/orgs/${orgId}/user-invites/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsUserInvitesAcceptCreate
     * @request POST:/api/v1/org/orgs/{org_id}/user-invites/{id}/accept/
     * @secure
     */
    orgOrgsUserInvitesAcceptCreate: (id: number, orgId: string, data: UserAcceptInvite, params: RequestParams = {}) =>
      this.request<OrgOrgsUserInvitesAcceptCreateData, any>({
        path: `/api/v1/org/orgs/${orgId}/user-invites/${id}/accept/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsRetrieve
     * @request GET:/api/v1/org/orgs/{id}/
     * @secure
     */
    orgOrgsRetrieve: (id: number, params: RequestParams = {}) =>
      this.request<OrgOrgsRetrieveData, any>({
        path: `/api/v1/org/orgs/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgOrgsPartialUpdate
     * @request PATCH:/api/v1/org/orgs/{id}/
     * @secure
     */
    orgOrgsPartialUpdate: (id: number, data: PatchedOrganizationDetailed, params: RequestParams = {}) =>
      this.request<OrgOrgsPartialUpdateData, any>({
        path: `/api/v1/org/orgs/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgSersRelatedOrgsList
     * @request GET:/api/v1/org/sers/{org_id}/related-orgs/
     * @secure
     */
    orgSersRelatedOrgsList: ({ orgId, ...query }: OrgSersRelatedOrgsListParams, params: RequestParams = {}) =>
      this.request<OrgSersRelatedOrgsListData, any>({
        path: `/api/v1/org/sers/${orgId}/related-orgs/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgSersRelatedOrgsRetrieve
     * @request GET:/api/v1/org/sers/{org_id}/related-orgs/{related_id}/
     * @secure
     */
    orgSersRelatedOrgsRetrieve: (orgId: string, relatedId: number, params: RequestParams = {}) =>
      this.request<OrgSersRelatedOrgsRetrieveData, any>({
        path: `/api/v1/org/sers/${orgId}/related-orgs/${relatedId}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgSersRelatedOrgsEmployeesList
     * @request GET:/api/v1/org/sers/{org_id}/related-orgs/{related_id}/employees/
     * @secure
     */
    orgSersRelatedOrgsEmployeesList: (
      { orgId, relatedId, ...query }: OrgSersRelatedOrgsEmployeesListParams,
      params: RequestParams = {},
    ) =>
      this.request<OrgSersRelatedOrgsEmployeesListData, any>({
        path: `/api/v1/org/sers/${orgId}/related-orgs/${relatedId}/employees/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags org
     * @name OrgSersRelatedOrgsEmployeesRetrieve
     * @request GET:/api/v1/org/sers/{org_id}/related-orgs/{related_id}/employees/{id}/
     * @secure
     */
    orgSersRelatedOrgsEmployeesRetrieve: (id: number, orgId: string, relatedId: string, params: RequestParams = {}) =>
      this.request<OrgSersRelatedOrgsEmployeesRetrieveData, any>({
        path: `/api/v1/org/sers/${orgId}/related-orgs/${relatedId}/employees/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsBrandsList
     * @request GET:/api/v1/vehicle/orgs/{org_id}/brands/
     * @secure
     */
    vehicleOrgsBrandsList: ({ orgId, ...query }: VehicleOrgsBrandsListParams, params: RequestParams = {}) =>
      this.request<VehicleOrgsBrandsListData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/brands/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsBrandsCreate
     * @request POST:/api/v1/vehicle/orgs/{org_id}/brands/
     * @secure
     */
    vehicleOrgsBrandsCreate: (orgId: string, data: VehicleBrand, params: RequestParams = {}) =>
      this.request<VehicleOrgsBrandsCreateData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/brands/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsBrandsRetrieve
     * @request GET:/api/v1/vehicle/orgs/{org_id}/brands/{id}/
     * @secure
     */
    vehicleOrgsBrandsRetrieve: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<VehicleOrgsBrandsRetrieveData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/brands/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsBrandsPartialUpdate
     * @request PATCH:/api/v1/vehicle/orgs/{org_id}/brands/{id}/
     * @secure
     */
    vehicleOrgsBrandsPartialUpdate: (
      id: number,
      orgId: string,
      data: PatchedVehicleBrand,
      params: RequestParams = {},
    ) =>
      this.request<VehicleOrgsBrandsPartialUpdateData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/brands/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsBrandsDestroy
     * @request DELETE:/api/v1/vehicle/orgs/{org_id}/brands/{id}/
     * @secure
     */
    vehicleOrgsBrandsDestroy: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<VehicleOrgsBrandsDestroyData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/brands/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsCatalogCacheRetrieve
     * @request GET:/api/v1/vehicle/orgs/{org_id}/catalog-cache/{format_version}/
     * @secure
     */
    vehicleOrgsCatalogCacheRetrieve: (formatVersion: number, orgId: string, params: RequestParams = {}) =>
      this.request<VehicleOrgsCatalogCacheRetrieveData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/catalog-cache/${formatVersion}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsEquipmentList
     * @request GET:/api/v1/vehicle/orgs/{org_id}/equipment/
     * @secure
     */
    vehicleOrgsEquipmentList: ({ orgId, ...query }: VehicleOrgsEquipmentListParams, params: RequestParams = {}) =>
      this.request<VehicleOrgsEquipmentListData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/equipment/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsModelsList
     * @request GET:/api/v1/vehicle/orgs/{org_id}/models/
     * @secure
     */
    vehicleOrgsModelsList: ({ orgId, ...query }: VehicleOrgsModelsListParams, params: RequestParams = {}) =>
      this.request<VehicleOrgsModelsListData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/models/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsModelsCreate
     * @request POST:/api/v1/vehicle/orgs/{org_id}/models/
     * @secure
     */
    vehicleOrgsModelsCreate: (orgId: string, data: VehicleModel, params: RequestParams = {}) =>
      this.request<VehicleOrgsModelsCreateData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/models/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsModelsRetrieve
     * @request GET:/api/v1/vehicle/orgs/{org_id}/models/{id}/
     * @secure
     */
    vehicleOrgsModelsRetrieve: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<VehicleOrgsModelsRetrieveData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/models/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsModelsPartialUpdate
     * @request PATCH:/api/v1/vehicle/orgs/{org_id}/models/{id}/
     * @secure
     */
    vehicleOrgsModelsPartialUpdate: (
      id: number,
      orgId: string,
      data: PatchedVehicleModelDetailed,
      params: RequestParams = {},
    ) =>
      this.request<VehicleOrgsModelsPartialUpdateData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/models/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsModelsDestroy
     * @request DELETE:/api/v1/vehicle/orgs/{org_id}/models/{id}/
     * @secure
     */
    vehicleOrgsModelsDestroy: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<VehicleOrgsModelsDestroyData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/models/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsVehiclesList
     * @request GET:/api/v1/vehicle/orgs/{org_id}/vehicles/
     * @secure
     */
    vehicleOrgsVehiclesList: ({ orgId, ...query }: VehicleOrgsVehiclesListParams, params: RequestParams = {}) =>
      this.request<VehicleOrgsVehiclesListData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/vehicles/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsVehiclesCreate
     * @request POST:/api/v1/vehicle/orgs/{org_id}/vehicles/
     * @secure
     */
    vehicleOrgsVehiclesCreate: (orgId: string, data: VehicleEdit, params: RequestParams = {}) =>
      this.request<VehicleOrgsVehiclesCreateData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/vehicles/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsVehiclesRetrieve
     * @request GET:/api/v1/vehicle/orgs/{org_id}/vehicles/{id}/
     * @secure
     */
    vehicleOrgsVehiclesRetrieve: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<VehicleOrgsVehiclesRetrieveData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/vehicles/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsVehiclesPartialUpdate
     * @request PATCH:/api/v1/vehicle/orgs/{org_id}/vehicles/{id}/
     * @secure
     */
    vehicleOrgsVehiclesPartialUpdate: (
      id: number,
      orgId: string,
      data: PatchedVehicleEdit,
      params: RequestParams = {},
    ) =>
      this.request<VehicleOrgsVehiclesPartialUpdateData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/vehicles/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsVehiclesDestroy
     * @request DELETE:/api/v1/vehicle/orgs/{org_id}/vehicles/{id}/
     * @secure
     */
    vehicleOrgsVehiclesDestroy: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<VehicleOrgsVehiclesDestroyData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/vehicles/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsVehiclesDocsList
     * @request GET:/api/v1/vehicle/orgs/{org_id}/vehicles/{vehicle_id}/docs/
     * @secure
     */
    vehicleOrgsVehiclesDocsList: (
      { orgId, vehicleId, ...query }: VehicleOrgsVehiclesDocsListParams,
      params: RequestParams = {},
    ) =>
      this.request<VehicleOrgsVehiclesDocsListData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/vehicles/${vehicleId}/docs/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsVehiclesDocsCreate
     * @request POST:/api/v1/vehicle/orgs/{org_id}/vehicles/{vehicle_id}/docs/
     * @secure
     */
    vehicleOrgsVehiclesDocsCreate: (
      orgId: string,
      vehicleId: string,
      data: VehicleDocumentationDetailed,
      params: RequestParams = {},
    ) =>
      this.request<VehicleOrgsVehiclesDocsCreateData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/vehicles/${vehicleId}/docs/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsVehiclesDocsRetrieve
     * @request GET:/api/v1/vehicle/orgs/{org_id}/vehicles/{vehicle_id}/docs/{id}/
     * @secure
     */
    vehicleOrgsVehiclesDocsRetrieve: (id: number, orgId: string, vehicleId: string, params: RequestParams = {}) =>
      this.request<VehicleOrgsVehiclesDocsRetrieveData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/vehicles/${vehicleId}/docs/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsVehiclesDocsDestroy
     * @request DELETE:/api/v1/vehicle/orgs/{org_id}/vehicles/{vehicle_id}/docs/{id}/
     * @secure
     */
    vehicleOrgsVehiclesDocsDestroy: (id: number, orgId: string, vehicleId: string, params: RequestParams = {}) =>
      this.request<VehicleOrgsVehiclesDocsDestroyData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/vehicles/${vehicleId}/docs/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsVehiclesPhotosList
     * @request GET:/api/v1/vehicle/orgs/{org_id}/vehicles/{vehicle_id}/photos/
     * @secure
     */
    vehicleOrgsVehiclesPhotosList: (
      { orgId, vehicleId, ...query }: VehicleOrgsVehiclesPhotosListParams,
      params: RequestParams = {},
    ) =>
      this.request<VehicleOrgsVehiclesPhotosListData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/vehicles/${vehicleId}/photos/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsVehiclesPhotosCreate
     * @request POST:/api/v1/vehicle/orgs/{org_id}/vehicles/{vehicle_id}/photos/
     * @secure
     */
    vehicleOrgsVehiclesPhotosCreate: (
      orgId: string,
      vehicleId: string,
      data: VehiclePhotoDetailed,
      params: RequestParams = {},
    ) =>
      this.request<VehicleOrgsVehiclesPhotosCreateData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/vehicles/${vehicleId}/photos/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsVehiclesPhotosRetrieve
     * @request GET:/api/v1/vehicle/orgs/{org_id}/vehicles/{vehicle_id}/photos/{id}/
     * @secure
     */
    vehicleOrgsVehiclesPhotosRetrieve: (id: number, orgId: string, vehicleId: string, params: RequestParams = {}) =>
      this.request<VehicleOrgsVehiclesPhotosRetrieveData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/vehicles/${vehicleId}/photos/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsVehiclesPhotosPartialUpdate
     * @request PATCH:/api/v1/vehicle/orgs/{org_id}/vehicles/{vehicle_id}/photos/{id}/
     * @secure
     */
    vehicleOrgsVehiclesPhotosPartialUpdate: (
      id: number,
      orgId: string,
      vehicleId: string,
      data: PatchedVehiclePhotoUpdate,
      params: RequestParams = {},
    ) =>
      this.request<VehicleOrgsVehiclesPhotosPartialUpdateData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/vehicles/${vehicleId}/photos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsVehiclesPhotosDestroy
     * @request DELETE:/api/v1/vehicle/orgs/{org_id}/vehicles/{vehicle_id}/photos/{id}/
     * @secure
     */
    vehicleOrgsVehiclesPhotosDestroy: (id: number, orgId: string, vehicleId: string, params: RequestParams = {}) =>
      this.request<VehicleOrgsVehiclesPhotosDestroyData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/vehicles/${vehicleId}/photos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsVehiclesRecsList
     * @request GET:/api/v1/vehicle/orgs/{org_id}/vehicles/{vehicle_id}/recs/
     * @secure
     */
    vehicleOrgsVehiclesRecsList: (
      { orgId, vehicleId, ...query }: VehicleOrgsVehiclesRecsListParams,
      params: RequestParams = {},
    ) =>
      this.request<VehicleOrgsVehiclesRecsListData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/vehicles/${vehicleId}/recs/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsVehiclesRecsRetrieve
     * @request GET:/api/v1/vehicle/orgs/{org_id}/vehicles/{vehicle_id}/recs/{id}/
     * @secure
     */
    vehicleOrgsVehiclesRecsRetrieve: (id: number, orgId: string, vehicleId: string, params: RequestParams = {}) =>
      this.request<VehicleOrgsVehiclesRecsRetrieveData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/vehicles/${vehicleId}/recs/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsVehiclesRuntimeList
     * @request GET:/api/v1/vehicle/orgs/{org_id}/vehicles/{vehicle_id}/runtime/
     * @secure
     */
    vehicleOrgsVehiclesRuntimeList: (
      { orgId, vehicleId, ...query }: VehicleOrgsVehiclesRuntimeListParams,
      params: RequestParams = {},
    ) =>
      this.request<VehicleOrgsVehiclesRuntimeListData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/vehicles/${vehicleId}/runtime/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleOrgsVehiclesRuntimeRetrieve
     * @request GET:/api/v1/vehicle/orgs/{org_id}/vehicles/{vehicle_id}/runtime/{id}/
     * @secure
     */
    vehicleOrgsVehiclesRuntimeRetrieve: (id: number, orgId: string, vehicleId: string, params: RequestParams = {}) =>
      this.request<VehicleOrgsVehiclesRuntimeRetrieveData, any>({
        path: `/api/v1/vehicle/orgs/${orgId}/vehicles/${vehicleId}/runtime/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersRelatedOrgsVehiclesList
     * @request GET:/api/v1/vehicle/sers/{org_id}/related-orgs/{related_id}/vehicles/
     * @secure
     */
    vehicleSersRelatedOrgsVehiclesList: (
      { orgId, relatedId, ...query }: VehicleSersRelatedOrgsVehiclesListParams,
      params: RequestParams = {},
    ) =>
      this.request<VehicleSersRelatedOrgsVehiclesListData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/related-orgs/${relatedId}/vehicles/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersRelatedOrgsVehiclesRetrieve
     * @request GET:/api/v1/vehicle/sers/{org_id}/related-orgs/{related_id}/vehicles/{id}/
     * @secure
     */
    vehicleSersRelatedOrgsVehiclesRetrieve: (
      id: number,
      orgId: string,
      relatedId: string,
      params: RequestParams = {},
    ) =>
      this.request<VehicleSersRelatedOrgsVehiclesRetrieveData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/related-orgs/${relatedId}/vehicles/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesList
     * @request GET:/api/v1/vehicle/sers/{org_id}/vehicles/
     * @secure
     */
    vehicleSersVehiclesList: ({ orgId, ...query }: VehicleSersVehiclesListParams, params: RequestParams = {}) =>
      this.request<VehicleSersVehiclesListData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesRetrieve
     * @request GET:/api/v1/vehicle/sers/{org_id}/vehicles/{id}/
     * @secure
     */
    vehicleSersVehiclesRetrieve: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<VehicleSersVehiclesRetrieveData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesDocsList
     * @request GET:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/docs/
     * @secure
     */
    vehicleSersVehiclesDocsList: (
      { orgId, vehicleId, ...query }: VehicleSersVehiclesDocsListParams,
      params: RequestParams = {},
    ) =>
      this.request<VehicleSersVehiclesDocsListData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/docs/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesDocsCreate
     * @request POST:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/docs/
     * @secure
     */
    vehicleSersVehiclesDocsCreate: (
      orgId: string,
      vehicleId: string,
      data: VehicleDocumentationDetailed,
      params: RequestParams = {},
    ) =>
      this.request<VehicleSersVehiclesDocsCreateData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/docs/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesDocsRetrieve
     * @request GET:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/docs/{id}/
     * @secure
     */
    vehicleSersVehiclesDocsRetrieve: (id: number, orgId: string, vehicleId: string, params: RequestParams = {}) =>
      this.request<VehicleSersVehiclesDocsRetrieveData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/docs/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesDocsDestroy
     * @request DELETE:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/docs/{id}/
     * @secure
     */
    vehicleSersVehiclesDocsDestroy: (id: number, orgId: string, vehicleId: string, params: RequestParams = {}) =>
      this.request<VehicleSersVehiclesDocsDestroyData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/docs/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesNotesList
     * @request GET:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/notes/
     * @secure
     */
    vehicleSersVehiclesNotesList: (
      { orgId, vehicleId, ...query }: VehicleSersVehiclesNotesListParams,
      params: RequestParams = {},
    ) =>
      this.request<VehicleSersVehiclesNotesListData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/notes/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesNotesCreate
     * @request POST:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/notes/
     * @secure
     */
    vehicleSersVehiclesNotesCreate: (orgId: string, vehicleId: string, data: VehicleNote, params: RequestParams = {}) =>
      this.request<VehicleSersVehiclesNotesCreateData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/notes/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesNotesRetrieve
     * @request GET:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/notes/{id}/
     * @secure
     */
    vehicleSersVehiclesNotesRetrieve: (id: number, orgId: string, vehicleId: string, params: RequestParams = {}) =>
      this.request<VehicleSersVehiclesNotesRetrieveData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/notes/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesNotesPartialUpdate
     * @request PATCH:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/notes/{id}/
     * @secure
     */
    vehicleSersVehiclesNotesPartialUpdate: (
      id: number,
      orgId: string,
      vehicleId: string,
      data: PatchedVehicleNote,
      params: RequestParams = {},
    ) =>
      this.request<VehicleSersVehiclesNotesPartialUpdateData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/notes/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesNotesDestroy
     * @request DELETE:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/notes/{id}/
     * @secure
     */
    vehicleSersVehiclesNotesDestroy: (id: number, orgId: string, vehicleId: string, params: RequestParams = {}) =>
      this.request<VehicleSersVehiclesNotesDestroyData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/notes/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesPhotosList
     * @request GET:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/photos/
     * @secure
     */
    vehicleSersVehiclesPhotosList: (
      { orgId, vehicleId, ...query }: VehicleSersVehiclesPhotosListParams,
      params: RequestParams = {},
    ) =>
      this.request<VehicleSersVehiclesPhotosListData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/photos/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesPhotosCreate
     * @request POST:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/photos/
     * @secure
     */
    vehicleSersVehiclesPhotosCreate: (
      orgId: string,
      vehicleId: string,
      data: VehiclePhotoDetailed,
      params: RequestParams = {},
    ) =>
      this.request<VehicleSersVehiclesPhotosCreateData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/photos/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesPhotosRetrieve
     * @request GET:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/photos/{id}/
     * @secure
     */
    vehicleSersVehiclesPhotosRetrieve: (id: number, orgId: string, vehicleId: string, params: RequestParams = {}) =>
      this.request<VehicleSersVehiclesPhotosRetrieveData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/photos/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesPhotosPartialUpdate
     * @request PATCH:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/photos/{id}/
     * @secure
     */
    vehicleSersVehiclesPhotosPartialUpdate: (
      id: number,
      orgId: string,
      vehicleId: string,
      data: PatchedVehiclePhotoUpdate,
      params: RequestParams = {},
    ) =>
      this.request<VehicleSersVehiclesPhotosPartialUpdateData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/photos/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesPhotosDestroy
     * @request DELETE:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/photos/{id}/
     * @secure
     */
    vehicleSersVehiclesPhotosDestroy: (id: number, orgId: string, vehicleId: string, params: RequestParams = {}) =>
      this.request<VehicleSersVehiclesPhotosDestroyData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/photos/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesRecsList
     * @request GET:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/recs/
     * @secure
     */
    vehicleSersVehiclesRecsList: (
      { orgId, vehicleId, ...query }: VehicleSersVehiclesRecsListParams,
      params: RequestParams = {},
    ) =>
      this.request<VehicleSersVehiclesRecsListData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/recs/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesRecsCreate
     * @request POST:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/recs/
     * @secure
     */
    vehicleSersVehiclesRecsCreate: (
      orgId: string,
      vehicleId: string,
      data: VehicleRecommendationDetailed,
      params: RequestParams = {},
    ) =>
      this.request<VehicleSersVehiclesRecsCreateData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/recs/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesRecsRetrieve
     * @request GET:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/recs/{id}/
     * @secure
     */
    vehicleSersVehiclesRecsRetrieve: (id: number, orgId: string, vehicleId: string, params: RequestParams = {}) =>
      this.request<VehicleSersVehiclesRecsRetrieveData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/recs/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesRecsPartialUpdate
     * @request PATCH:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/recs/{id}/
     * @secure
     */
    vehicleSersVehiclesRecsPartialUpdate: (
      id: number,
      orgId: string,
      vehicleId: string,
      data: PatchedVehicleRecommendationDetailed,
      params: RequestParams = {},
    ) =>
      this.request<VehicleSersVehiclesRecsPartialUpdateData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/recs/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesRecsDestroy
     * @request DELETE:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/recs/{id}/
     * @secure
     */
    vehicleSersVehiclesRecsDestroy: (id: number, orgId: string, vehicleId: string, params: RequestParams = {}) =>
      this.request<VehicleSersVehiclesRecsDestroyData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/recs/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesRuntimeList
     * @request GET:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/runtime/
     * @secure
     */
    vehicleSersVehiclesRuntimeList: (
      { orgId, vehicleId, ...query }: VehicleSersVehiclesRuntimeListParams,
      params: RequestParams = {},
    ) =>
      this.request<VehicleSersVehiclesRuntimeListData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/runtime/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesRuntimeCreate
     * @request POST:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/runtime/
     * @secure
     */
    vehicleSersVehiclesRuntimeCreate: (
      orgId: string,
      vehicleId: string,
      data: VehicleRuntime,
      params: RequestParams = {},
    ) =>
      this.request<VehicleSersVehiclesRuntimeCreateData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/runtime/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesRuntimeRetrieve
     * @request GET:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/runtime/{id}/
     * @secure
     */
    vehicleSersVehiclesRuntimeRetrieve: (id: number, orgId: string, vehicleId: string, params: RequestParams = {}) =>
      this.request<VehicleSersVehiclesRuntimeRetrieveData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/runtime/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesRuntimePartialUpdate
     * @request PATCH:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/runtime/{id}/
     * @secure
     */
    vehicleSersVehiclesRuntimePartialUpdate: (
      id: number,
      orgId: string,
      vehicleId: string,
      data: PatchedVehicleRuntime,
      params: RequestParams = {},
    ) =>
      this.request<VehicleSersVehiclesRuntimePartialUpdateData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/runtime/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags vehicle
     * @name VehicleSersVehiclesRuntimeDestroy
     * @request DELETE:/api/v1/vehicle/sers/{org_id}/vehicles/{vehicle_id}/runtime/{id}/
     * @secure
     */
    vehicleSersVehiclesRuntimeDestroy: (id: number, orgId: string, vehicleId: string, params: RequestParams = {}) =>
      this.request<VehicleSersVehiclesRuntimeDestroyData, any>({
        path: `/api/v1/vehicle/sers/${orgId}/vehicles/${vehicleId}/runtime/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkM2MChatButtonCreate
     * @request POST:/api/v1/work/m2m/chat-button/
     * @secure
     */
    workM2MChatButtonCreate: (data: ChatButton, params: RequestParams = {}) =>
      this.request<WorkM2MChatButtonCreateData, any>({
        path: `/api/v1/work/m2m/chat-button/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkM2MChatPushCreate
     * @request POST:/api/v1/work/m2m/chat-push/
     * @secure
     */
    workM2MChatPushCreate: (data: ChatPush, params: RequestParams = {}) =>
      this.request<WorkM2MChatPushCreateData, any>({
        path: `/api/v1/work/m2m/chat-push/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkM2MChatStatusCreate
     * @request POST:/api/v1/work/m2m/chat-status/
     * @secure
     */
    workM2MChatStatusCreate: (data: ChatStatus, params: RequestParams = {}) =>
      this.request<WorkM2MChatStatusCreateData, any>({
        path: `/api/v1/work/m2m/chat-status/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsChatTokensCreate
     * @request POST:/api/v1/work/orgs/{org_id}/chat-tokens/
     * @secure
     */
    workOrgsChatTokensCreate: (orgId: string, data: ChatToken, params: RequestParams = {}) =>
      this.request<WorkOrgsChatTokensCreateData, any>({
        path: `/api/v1/work/orgs/${orgId}/chat-tokens/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsMyGeoList
     * @request GET:/api/v1/work/orgs/{org_id}/my-geo/
     * @secure
     */
    workOrgsMyGeoList: ({ orgId, ...query }: WorkOrgsMyGeoListParams, params: RequestParams = {}) =>
      this.request<WorkOrgsMyGeoListData, any>({
        path: `/api/v1/work/orgs/${orgId}/my-geo/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsMyGeoCreate
     * @request POST:/api/v1/work/orgs/{org_id}/my-geo/
     * @secure
     */
    workOrgsMyGeoCreate: (orgId: string, data: WorkEmployeeGeolocation, params: RequestParams = {}) =>
      this.request<WorkOrgsMyGeoCreateData, any>({
        path: `/api/v1/work/orgs/${orgId}/my-geo/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsSersList
     * @request GET:/api/v1/work/orgs/{org_id}/sers/
     * @secure
     */
    workOrgsSersList: ({ orgId, ...query }: WorkOrgsSersListParams, params: RequestParams = {}) =>
      this.request<WorkOrgsSersListData, any>({
        path: `/api/v1/work/orgs/${orgId}/sers/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsSersRetrieve
     * @request GET:/api/v1/work/orgs/{org_id}/sers/{id}/
     * @secure
     */
    workOrgsSersRetrieve: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<WorkOrgsSersRetrieveData, any>({
        path: `/api/v1/work/orgs/${orgId}/sers/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsSersSearchCreate
     * @request POST:/api/v1/work/orgs/{org_id}/sers/search/
     * @secure
     */
    workOrgsSersSearchCreate: (orgId: string, data: WorkServiceCenterSearch, params: RequestParams = {}) =>
      this.request<WorkOrgsSersSearchCreateData, any>({
        path: `/api/v1/work/orgs/${orgId}/sers/search/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksList
     * @request GET:/api/v1/work/orgs/{org_id}/tasks/
     * @secure
     */
    workOrgsTasksList: ({ orgId, ...query }: WorkOrgsTasksListParams, params: RequestParams = {}) =>
      this.request<WorkOrgsTasksListData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksCreate
     * @request POST:/api/v1/work/orgs/{org_id}/tasks/
     * @secure
     */
    workOrgsTasksCreate: (orgId: string, data: OrgWorkTaskEdit, params: RequestParams = {}) =>
      this.request<WorkOrgsTasksCreateData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksRetrieve
     * @request GET:/api/v1/work/orgs/{org_id}/tasks/{id}/
     * @secure
     */
    workOrgsTasksRetrieve: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<WorkOrgsTasksRetrieveData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksPartialUpdate
     * @request PATCH:/api/v1/work/orgs/{org_id}/tasks/{id}/
     * @secure
     */
    workOrgsTasksPartialUpdate: (id: number, orgId: string, data: PatchedOrgWorkTaskEdit, params: RequestParams = {}) =>
      this.request<WorkOrgsTasksPartialUpdateData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksDestroy
     * @request DELETE:/api/v1/work/orgs/{org_id}/tasks/{id}/
     * @secure
     */
    workOrgsTasksDestroy: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<WorkOrgsTasksDestroyData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksCustomerPartialUpdate
     * @request PATCH:/api/v1/work/orgs/{org_id}/tasks/{id}/customer/
     * @secure
     */
    workOrgsTasksCustomerPartialUpdate: (
      id: number,
      orgId: string,
      data: PatchedWorkTaskMeCustomer,
      params: RequestParams = {},
    ) =>
      this.request<WorkOrgsTasksCustomerPartialUpdateData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${id}/customer/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksGeoRetrieve
     * @request GET:/api/v1/work/orgs/{org_id}/tasks/{id}/geo/
     * @secure
     */
    workOrgsTasksGeoRetrieve: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<WorkOrgsTasksGeoRetrieveData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${id}/geo/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksResultRetrieve
     * @request GET:/api/v1/work/orgs/{org_id}/tasks/{id}/result/
     * @secure
     */
    workOrgsTasksResultRetrieve: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<WorkOrgsTasksResultRetrieveData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${id}/result/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksResultMarkPartialUpdate
     * @request PATCH:/api/v1/work/orgs/{org_id}/tasks/{id}/result-mark/
     * @secure
     */
    workOrgsTasksResultMarkPartialUpdate: (
      id: number,
      orgId: string,
      data: PatchedWorkTaskMarkResult,
      params: RequestParams = {},
    ) =>
      this.request<WorkOrgsTasksResultMarkPartialUpdateData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${id}/result-mark/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksAttachmentsList
     * @request GET:/api/v1/work/orgs/{org_id}/tasks/{task_id}/attachments/
     * @secure
     */
    workOrgsTasksAttachmentsList: (
      { orgId, taskId, ...query }: WorkOrgsTasksAttachmentsListParams,
      params: RequestParams = {},
    ) =>
      this.request<WorkOrgsTasksAttachmentsListData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${taskId}/attachments/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksAttachmentsCreate
     * @request POST:/api/v1/work/orgs/{org_id}/tasks/{task_id}/attachments/
     * @secure
     */
    workOrgsTasksAttachmentsCreate: (
      orgId: string,
      taskId: string,
      data: WorkTaskAttachment,
      params: RequestParams = {},
    ) =>
      this.request<WorkOrgsTasksAttachmentsCreateData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${taskId}/attachments/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksAttachmentsRetrieve
     * @request GET:/api/v1/work/orgs/{org_id}/tasks/{task_id}/attachments/{id}/
     * @secure
     */
    workOrgsTasksAttachmentsRetrieve: (id: number, orgId: string, taskId: string, params: RequestParams = {}) =>
      this.request<WorkOrgsTasksAttachmentsRetrieveData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${taskId}/attachments/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksAttachmentsPartialUpdate
     * @request PATCH:/api/v1/work/orgs/{org_id}/tasks/{task_id}/attachments/{id}/
     * @secure
     */
    workOrgsTasksAttachmentsPartialUpdate: (
      id: number,
      orgId: string,
      taskId: string,
      data: PatchedWorkTaskAttachment,
      params: RequestParams = {},
    ) =>
      this.request<WorkOrgsTasksAttachmentsPartialUpdateData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${taskId}/attachments/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksAttachmentsDestroy
     * @request DELETE:/api/v1/work/orgs/{org_id}/tasks/{task_id}/attachments/{id}/
     * @secure
     */
    workOrgsTasksAttachmentsDestroy: (id: number, orgId: string, taskId: string, params: RequestParams = {}) =>
      this.request<WorkOrgsTasksAttachmentsDestroyData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${taskId}/attachments/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksReviewsList
     * @request GET:/api/v1/work/orgs/{org_id}/tasks/{task_id}/reviews/
     * @secure
     */
    workOrgsTasksReviewsList: (
      { orgId, taskId, ...query }: WorkOrgsTasksReviewsListParams,
      params: RequestParams = {},
    ) =>
      this.request<WorkOrgsTasksReviewsListData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${taskId}/reviews/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksReviewsCreate
     * @request POST:/api/v1/work/orgs/{org_id}/tasks/{task_id}/reviews/
     * @secure
     */
    workOrgsTasksReviewsCreate: (orgId: string, taskId: string, data: WorkReview, params: RequestParams = {}) =>
      this.request<WorkOrgsTasksReviewsCreateData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${taskId}/reviews/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksReviewsRetrieve
     * @request GET:/api/v1/work/orgs/{org_id}/tasks/{task_id}/reviews/{id}/
     * @secure
     */
    workOrgsTasksReviewsRetrieve: (id: number, orgId: string, taskId: string, params: RequestParams = {}) =>
      this.request<WorkOrgsTasksReviewsRetrieveData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${taskId}/reviews/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksReviewsPartialUpdate
     * @request PATCH:/api/v1/work/orgs/{org_id}/tasks/{task_id}/reviews/{id}/
     * @secure
     */
    workOrgsTasksReviewsPartialUpdate: (
      id: number,
      orgId: string,
      taskId: string,
      data: PatchedWorkReview,
      params: RequestParams = {},
    ) =>
      this.request<WorkOrgsTasksReviewsPartialUpdateData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${taskId}/reviews/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksReviewsDestroy
     * @request DELETE:/api/v1/work/orgs/{org_id}/tasks/{task_id}/reviews/{id}/
     * @secure
     */
    workOrgsTasksReviewsDestroy: (id: number, orgId: string, taskId: string, params: RequestParams = {}) =>
      this.request<WorkOrgsTasksReviewsDestroyData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${taskId}/reviews/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksStatusesList
     * @request GET:/api/v1/work/orgs/{org_id}/tasks/{task_id}/statuses/
     * @secure
     */
    workOrgsTasksStatusesList: (
      { orgId, taskId, ...query }: WorkOrgsTasksStatusesListParams,
      params: RequestParams = {},
    ) =>
      this.request<WorkOrgsTasksStatusesListData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${taskId}/statuses/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksStatusesRetrieve
     * @request GET:/api/v1/work/orgs/{org_id}/tasks/{task_id}/statuses/{uuid}/
     * @secure
     */
    workOrgsTasksStatusesRetrieve: (orgId: string, taskId: string, uuid: string, params: RequestParams = {}) =>
      this.request<WorkOrgsTasksStatusesRetrieveData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/${taskId}/statuses/${uuid}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksFullList
     * @request GET:/api/v1/work/orgs/{org_id}/tasks/full/
     * @secure
     */
    workOrgsTasksFullList: ({ orgId, ...query }: WorkOrgsTasksFullListParams, params: RequestParams = {}) =>
      this.request<WorkOrgsTasksFullListData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/full/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkOrgsTasksGeosList
     * @request GET:/api/v1/work/orgs/{org_id}/tasks/geos/
     * @secure
     */
    workOrgsTasksGeosList: ({ orgId, ...query }: WorkOrgsTasksGeosListParams, params: RequestParams = {}) =>
      this.request<WorkOrgsTasksGeosListData, any>({
        path: `/api/v1/work/orgs/${orgId}/tasks/geos/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersChatTokensCreate
     * @request POST:/api/v1/work/sers/{org_id}/chat-tokens/
     * @secure
     */
    workSersChatTokensCreate: (orgId: string, data: ChatToken, params: RequestParams = {}) =>
      this.request<WorkSersChatTokensCreateData, any>({
        path: `/api/v1/work/sers/${orgId}/chat-tokens/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersEmployeesList
     * @request GET:/api/v1/work/sers/{org_id}/employees/
     * @secure
     */
    workSersEmployeesList: ({ orgId, ...query }: WorkSersEmployeesListParams, params: RequestParams = {}) =>
      this.request<WorkSersEmployeesListData, any>({
        path: `/api/v1/work/sers/${orgId}/employees/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersEmployeesRetrieve
     * @request GET:/api/v1/work/sers/{org_id}/employees/{id}/
     * @secure
     */
    workSersEmployeesRetrieve: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<WorkSersEmployeesRetrieveData, any>({
        path: `/api/v1/work/sers/${orgId}/employees/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersMyGeoList
     * @request GET:/api/v1/work/sers/{org_id}/my-geo/
     * @secure
     */
    workSersMyGeoList: ({ orgId, ...query }: WorkSersMyGeoListParams, params: RequestParams = {}) =>
      this.request<WorkSersMyGeoListData, any>({
        path: `/api/v1/work/sers/${orgId}/my-geo/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersMyGeoCreate
     * @request POST:/api/v1/work/sers/{org_id}/my-geo/
     * @secure
     */
    workSersMyGeoCreate: (orgId: string, data: WorkEmployeeGeolocation, params: RequestParams = {}) =>
      this.request<WorkSersMyGeoCreateData, any>({
        path: `/api/v1/work/sers/${orgId}/my-geo/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersOrgsList
     * @request GET:/api/v1/work/sers/{org_id}/orgs/
     * @secure
     */
    workSersOrgsList: ({ orgId, ...query }: WorkSersOrgsListParams, params: RequestParams = {}) =>
      this.request<WorkSersOrgsListData, any>({
        path: `/api/v1/work/sers/${orgId}/orgs/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersOrgsRetrieve
     * @request GET:/api/v1/work/sers/{org_id}/orgs/{id}/
     * @secure
     */
    workSersOrgsRetrieve: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<WorkSersOrgsRetrieveData, any>({
        path: `/api/v1/work/sers/${orgId}/orgs/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksList
     * @request GET:/api/v1/work/sers/{org_id}/tasks/
     * @secure
     */
    workSersTasksList: ({ orgId, ...query }: WorkSersTasksListParams, params: RequestParams = {}) =>
      this.request<WorkSersTasksListData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksCreate
     * @request POST:/api/v1/work/sers/{org_id}/tasks/
     * @secure
     */
    workSersTasksCreate: (orgId: string, data: SerWorkTaskEdit, params: RequestParams = {}) =>
      this.request<WorkSersTasksCreateData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksRetrieve
     * @request GET:/api/v1/work/sers/{org_id}/tasks/{id}/
     * @secure
     */
    workSersTasksRetrieve: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<WorkSersTasksRetrieveData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksExecutorsPartialUpdate
     * @request PATCH:/api/v1/work/sers/{org_id}/tasks/{id}/executors/
     * @secure
     */
    workSersTasksExecutorsPartialUpdate: (
      id: number,
      orgId: string,
      data: PatchedWorkTaskExecutor,
      params: RequestParams = {},
    ) =>
      this.request<WorkSersTasksExecutorsPartialUpdateData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${id}/executors/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksGeoRetrieve
     * @request GET:/api/v1/work/sers/{org_id}/tasks/{id}/geo/
     * @secure
     */
    workSersTasksGeoRetrieve: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<WorkSersTasksGeoRetrieveData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${id}/geo/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksResultRetrieve
     * @request GET:/api/v1/work/sers/{org_id}/tasks/{id}/result/
     * @secure
     */
    workSersTasksResultRetrieve: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<WorkSersTasksResultRetrieveData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${id}/result/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksResultPartialUpdate
     * @request PATCH:/api/v1/work/sers/{org_id}/tasks/{id}/result/
     * @secure
     */
    workSersTasksResultPartialUpdate: (
      id: number,
      orgId: string,
      data: PatchedWorkTaskSaveResult,
      params: RequestParams = {},
    ) =>
      this.request<WorkSersTasksResultPartialUpdateData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${id}/result/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksResultApplyPartialUpdate
     * @request PATCH:/api/v1/work/sers/{org_id}/tasks/{id}/result-apply/
     * @secure
     */
    workSersTasksResultApplyPartialUpdate: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<WorkSersTasksResultApplyPartialUpdateData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${id}/result-apply/`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksResultEditPartialUpdate
     * @request PATCH:/api/v1/work/sers/{org_id}/tasks/{id}/result-edit/
     * @secure
     */
    workSersTasksResultEditPartialUpdate: (
      id: number,
      orgId: string,
      data: PatchedWorkTaskEditResult,
      params: RequestParams = {},
    ) =>
      this.request<WorkSersTasksResultEditPartialUpdateData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${id}/result-edit/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksAttachmentsList
     * @request GET:/api/v1/work/sers/{org_id}/tasks/{task_id}/attachments/
     * @secure
     */
    workSersTasksAttachmentsList: (
      { orgId, taskId, ...query }: WorkSersTasksAttachmentsListParams,
      params: RequestParams = {},
    ) =>
      this.request<WorkSersTasksAttachmentsListData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${taskId}/attachments/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksAttachmentsCreate
     * @request POST:/api/v1/work/sers/{org_id}/tasks/{task_id}/attachments/
     * @secure
     */
    workSersTasksAttachmentsCreate: (
      orgId: string,
      taskId: string,
      data: WorkTaskAttachment,
      params: RequestParams = {},
    ) =>
      this.request<WorkSersTasksAttachmentsCreateData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${taskId}/attachments/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksAttachmentsRetrieve
     * @request GET:/api/v1/work/sers/{org_id}/tasks/{task_id}/attachments/{id}/
     * @secure
     */
    workSersTasksAttachmentsRetrieve: (id: number, orgId: string, taskId: string, params: RequestParams = {}) =>
      this.request<WorkSersTasksAttachmentsRetrieveData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${taskId}/attachments/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksAttachmentsPartialUpdate
     * @request PATCH:/api/v1/work/sers/{org_id}/tasks/{task_id}/attachments/{id}/
     * @secure
     */
    workSersTasksAttachmentsPartialUpdate: (
      id: number,
      orgId: string,
      taskId: string,
      data: PatchedWorkTaskAttachment,
      params: RequestParams = {},
    ) =>
      this.request<WorkSersTasksAttachmentsPartialUpdateData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${taskId}/attachments/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksAttachmentsDestroy
     * @request DELETE:/api/v1/work/sers/{org_id}/tasks/{task_id}/attachments/{id}/
     * @secure
     */
    workSersTasksAttachmentsDestroy: (id: number, orgId: string, taskId: string, params: RequestParams = {}) =>
      this.request<WorkSersTasksAttachmentsDestroyData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${taskId}/attachments/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksReviewsList
     * @request GET:/api/v1/work/sers/{org_id}/tasks/{task_id}/reviews/
     * @secure
     */
    workSersTasksReviewsList: (
      { orgId, taskId, ...query }: WorkSersTasksReviewsListParams,
      params: RequestParams = {},
    ) =>
      this.request<WorkSersTasksReviewsListData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${taskId}/reviews/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksReviewsCreate
     * @request POST:/api/v1/work/sers/{org_id}/tasks/{task_id}/reviews/
     * @secure
     */
    workSersTasksReviewsCreate: (orgId: string, taskId: string, data: WorkReview, params: RequestParams = {}) =>
      this.request<WorkSersTasksReviewsCreateData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${taskId}/reviews/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksReviewsRetrieve
     * @request GET:/api/v1/work/sers/{org_id}/tasks/{task_id}/reviews/{id}/
     * @secure
     */
    workSersTasksReviewsRetrieve: (id: number, orgId: string, taskId: string, params: RequestParams = {}) =>
      this.request<WorkSersTasksReviewsRetrieveData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${taskId}/reviews/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksReviewsPartialUpdate
     * @request PATCH:/api/v1/work/sers/{org_id}/tasks/{task_id}/reviews/{id}/
     * @secure
     */
    workSersTasksReviewsPartialUpdate: (
      id: number,
      orgId: string,
      taskId: string,
      data: PatchedWorkReview,
      params: RequestParams = {},
    ) =>
      this.request<WorkSersTasksReviewsPartialUpdateData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${taskId}/reviews/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksReviewsDestroy
     * @request DELETE:/api/v1/work/sers/{org_id}/tasks/{task_id}/reviews/{id}/
     * @secure
     */
    workSersTasksReviewsDestroy: (id: number, orgId: string, taskId: string, params: RequestParams = {}) =>
      this.request<WorkSersTasksReviewsDestroyData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${taskId}/reviews/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksRoutesList
     * @request GET:/api/v1/work/sers/{org_id}/tasks/{task_id}/routes/
     * @secure
     */
    workSersTasksRoutesList: ({ orgId, taskId, ...query }: WorkSersTasksRoutesListParams, params: RequestParams = {}) =>
      this.request<WorkSersTasksRoutesListData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${taskId}/routes/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksRoutesCreate
     * @request POST:/api/v1/work/sers/{org_id}/tasks/{task_id}/routes/
     * @secure
     */
    workSersTasksRoutesCreate: (orgId: string, taskId: string, data: WorkTaskRoute, params: RequestParams = {}) =>
      this.request<WorkSersTasksRoutesCreateData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${taskId}/routes/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksRoutesRetrieve
     * @request GET:/api/v1/work/sers/{org_id}/tasks/{task_id}/routes/{uuid}/
     * @secure
     */
    workSersTasksRoutesRetrieve: (orgId: string, taskId: string, uuid: string, params: RequestParams = {}) =>
      this.request<WorkSersTasksRoutesRetrieveData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${taskId}/routes/${uuid}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksStatusesList
     * @request GET:/api/v1/work/sers/{org_id}/tasks/{task_id}/statuses/
     * @secure
     */
    workSersTasksStatusesList: (
      { orgId, taskId, ...query }: WorkSersTasksStatusesListParams,
      params: RequestParams = {},
    ) =>
      this.request<WorkSersTasksStatusesListData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${taskId}/statuses/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksStatusesRetrieve
     * @request GET:/api/v1/work/sers/{org_id}/tasks/{task_id}/statuses/{uuid}/
     * @secure
     */
    workSersTasksStatusesRetrieve: (orgId: string, taskId: string, uuid: string, params: RequestParams = {}) =>
      this.request<WorkSersTasksStatusesRetrieveData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/${taskId}/statuses/${uuid}/`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksFullList
     * @request GET:/api/v1/work/sers/{org_id}/tasks/full/
     * @secure
     */
    workSersTasksFullList: ({ orgId, ...query }: WorkSersTasksFullListParams, params: RequestParams = {}) =>
      this.request<WorkSersTasksFullListData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/full/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksGeosList
     * @request GET:/api/v1/work/sers/{org_id}/tasks/geos/
     * @secure
     */
    workSersTasksGeosList: ({ orgId, ...query }: WorkSersTasksGeosListParams, params: RequestParams = {}) =>
      this.request<WorkSersTasksGeosListData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/geos/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersTasksVerboseList
     * @request GET:/api/v1/work/sers/{org_id}/tasks/verbose/
     * @secure
     */
    workSersTasksVerboseList: ({ orgId, ...query }: WorkSersTasksVerboseListParams, params: RequestParams = {}) =>
      this.request<WorkSersTasksVerboseListData, any>({
        path: `/api/v1/work/sers/${orgId}/tasks/verbose/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersVehiclesList
     * @request GET:/api/v1/work/sers/{org_id}/vehicles/
     * @secure
     */
    workSersVehiclesList: ({ orgId, ...query }: WorkSersVehiclesListParams, params: RequestParams = {}) =>
      this.request<WorkSersVehiclesListData, any>({
        path: `/api/v1/work/sers/${orgId}/vehicles/`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags work
     * @name WorkSersVehiclesRetrieve
     * @request GET:/api/v1/work/sers/{org_id}/vehicles/{id}/
     * @secure
     */
    workSersVehiclesRetrieve: (id: number, orgId: string, params: RequestParams = {}) =>
      this.request<WorkSersVehiclesRetrieveData, any>({
        path: `/api/v1/work/sers/${orgId}/vehicles/${id}/`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
}
