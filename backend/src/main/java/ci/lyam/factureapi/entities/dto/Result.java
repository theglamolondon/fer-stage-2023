package ci.lyam.factureapi.entities.dto;

public class Result {
    public Boolean status;
    public String message;

    public Result() {
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
