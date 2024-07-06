Một todo list có gì?
- Một mảng các công việc có cấu trúc nội dung công việc, ô checkbox với trạng thái đã xong việc hay chưa
- Lưu trạng thái mảng các công việc vào localStorage, lấy trạng thái mỗi khi thêm mới một công việc, xóa công việc, di chuyển vị trí công việc
- Công việc đã thực hiện (checkbox được check) sẽ di chuyển xuống dưới nút tạo

Chức năng:
- Xóa công việc
- Di chuyển công việc (độ ưu tiên)
- Khi công việc hoàn thành, hiển thị thời gian hoàn thành

Lưu nội dung khi tạo một công việc?
- Ô input hoặc div 
- Lưu nội dung khi ấn enter hoặc move out khỏi công việc


Chức năng đầu tiên, thêm công việc khi ấn nút thêm

Số thứ tự job
Tổng số job

Tạo một biến đếm tổng số job, ban đầu là 0
Thêm 1 bớt 1 tăng giảm biến

Ban đầu chưa có job, nên khi ấn tạo job sẽ vào job chưa được thực hiện

listJobs = [
    {
        id:1,
        content: Hom nay la thu 2,
        checked: no,
    },
    {
        id:2,
        content:Hom nay la thu 3,
        checked: no,
    }

]