const en = {
    SUCCESS: 'Success',
    INVALID_ACCESS_TOKEN: 'Invalid access token',
    INVALID_INFORMATION: 'Invalid information',

    INVALID_LIMIT: 'Invalid limit',
    INVALID_PAGE: 'Invalid page',

    NO_PERMISSIONS: 'No permissions',

    USERNAME_EMPTY: 'Username cannot be empty',
    USER_ID_EMPTY: 'User ID cannot be empty',

    PROJECT_ID_EMPTY: 'Project ID cannot be empty',
}

const vi = {
    SUCCESS: 'Thành công',
    INVALID_ACCESS_TOKEN: 'Mã truy cập không hợp lệ',
    INVALID_INFORMATION: 'Thông tin không hợp lệ',

    INVALID_LIMIT: 'Giới hạn không hợp lệ',
    INVALID_PAGE: 'Trang không hợp lệ',

    NO_PERMISSIONS: 'Không có quyền',

    USERNAME_EMPTY: 'Tên đăng nhập không được để trống',
    USER_ID_EMPTY: 'ID người dùng không được để trống',

    PROJECT_ID_EMPTY: 'ID dự án không được để trống',
}

export type CommonMessage = typeof en

export default {
    en,
    vi
}